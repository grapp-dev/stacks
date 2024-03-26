module.exports = babel => {
  const { types: t } = babel;

  const getAttribute = (attributes, name) => {
    return attributes.find(attribute => {
      return attribute.name.name === name;
    });
  };

  const makeBreakpointCallExpression = (key, value) => {
    const expression = value.type === 'JSXExpressionContainer' ? value.expression : value;
    return t.CallExpression(t.Identifier(key), [expression]);
  };

  const transformAttributeFactory = attributes => {
    return (attributeName, expressionName) => {
      const attribute = getAttribute(attributes, attributeName);

      if (attribute) {
        return makeBreakpointCallExpression(expressionName, attribute.value);
      }
    };
  };

  const makeImportSpecifier = name => {
    const identifier = t.Identifier(name);
    return t.ImportSpecifier(identifier, identifier);
  };

  let importDeclaration = undefined;
  let program = undefined;

  return {
    visitor: {
      Program(path) {
        program = path;
      },
      ImportDeclaration(path) {
        if (path.node.source.value === '@grapp/stacks') {
          importDeclaration = path;
        }
      },
      JSXElement(path) {
        if (path.node.openingElement && path.node.openingElement.name.name !== 'Hidden') {
          return;
        }

        const transformAttribute = transformAttributeFactory(path.node.openingElement.attributes);
        const belowAttribute = transformAttribute('below', 'isBreakpointBelow');
        const aboveAttribute = transformAttribute('above', 'isBreakpointAbove');

        let logicalExpression = t.booleanLiteral(false);

        if (belowAttribute && aboveAttribute) {
          logicalExpression = t.logicalExpression('||', belowAttribute, aboveAttribute);
        } else if (belowAttribute) {
          logicalExpression = belowAttribute;
        } else if (aboveAttribute) {
          logicalExpression = aboveAttribute;
        }

        if (logicalExpression) {
          const child = path.node.children.find(child => {
            return child.type === 'JSXElement' || child.type === 'JSXFragment';
          });

          if (!child) {
            return;
          }

          const conditionalExpression = t.conditionalExpression(
            logicalExpression,
            child,
            t.nullLiteral(),
          );
          path.replaceWith(t.jsxExpressionContainer(conditionalExpression));

          const importBreakpointBelow = makeImportSpecifier('isBreakpointBelow');
          const importBreakpointAbove = makeImportSpecifier('isBreakpointAbove');

          if (importDeclaration) {
            belowAttribute &&
              importDeclaration.unshiftContainer('specifiers', importBreakpointBelow);
            aboveAttribute &&
              importDeclaration.unshiftContainer('specifiers', importBreakpointAbove);
          } else {
            const specifiers = [
              belowAttribute && importBreakpointBelow,
              aboveAttribute && importBreakpointAbove,
            ].filter(Boolean);

            program.unshiftContainer(
              'body',
              t.importDeclaration(specifiers, t.stringLiteral('@grapp/stacks')),
            );
          }
        }
      },
    },
  };
};
