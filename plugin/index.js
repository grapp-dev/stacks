module.exports = babel => {
  const { types: t } = babel;

  const getAttribute = (attributes, name) => {
    return attributes.find(attribute => {
      return attribute.name.name === name;
    });
  };

  const makeBreakpointCallExpression = (key, value) => {
    const expression = value.type === 'JSXExpressionContainer' ? value.expression : value;

    return t.callExpression(
      t.memberExpression(
        t.callExpression(t.identifier('useBreakpointComparator'), []),
        t.identifier(key),
      ),
      [expression],
    );
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
        const belowAttribute = transformAttribute('below', 'isBelow');
        const aboveAttribute = transformAttribute('above', 'isAbove');

        let logicalExpression = t.booleanLiteral(false);

        if (belowAttribute && aboveAttribute) {
          logicalExpression = t.logicalExpression('||', belowAttribute, aboveAttribute);
        } else if (belowAttribute) {
          logicalExpression = belowAttribute;
        } else if (aboveAttribute) {
          logicalExpression = aboveAttribute;
        }

        if (logicalExpression) {
          let child = path.node.children.find(child => {
            return (
              child.type === 'JSXElement' ||
              child.type === 'JSXFragment' ||
              child.type === 'JSXExpressionContainer'
            );
          });

          if (!child) {
            return;
          }

          if (child.type === 'JSXExpressionContainer') {
            child = child.expression;
          }

          const conditionalExpression = t.conditionalExpression(
            logicalExpression,
            t.nullLiteral(),
            child,
          );

          if (path.parent && path.parent.type === 'ReturnStatement') {
            path.replaceWith(conditionalExpression);
          } else {
            path.replaceWith(t.jsxExpressionContainer(conditionalExpression));
          }

          const importHook = makeImportSpecifier('useBreakpointComparator');

          if (importDeclaration) {
            const isImported = importDeclaration.node.specifiers.some(specifier => {
              return specifier.imported.name === 'useBreakpointComparator';
            });

            if ((belowAttribute || aboveAttribute) && !isImported) {
              importDeclaration.unshiftContainer('specifiers', importHook);
            }
          } else {
            const specifiers = belowAttribute || aboveAttribute ? [importHook] : [];

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
