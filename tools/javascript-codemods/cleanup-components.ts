import { API, ObjectExpression, ObjectProperty } from 'jscodeshift'

const viewProps = [
  'accessibilityActions',
  'accessibilityElementsHidden',
  'accessibilityHint',
  'accessibilityIgnoresInvertColors',
  'accessibilityLabel',
  'accessibilityLiveRegion',
  'accessibilityRole',
  'accessibilityState',
  'accessibilityValue',
  'accessibilityViewIsModal',
  'accessible',
  'collapsable',
  'hitSlop',
  'importantForAccessibility',
  'nativeID',
  'needsOffscreenAlphaCompositing',
  'onAccessibilityEscape',
  'onAccessibilityTap',
  'onLayout',
  'onMagicTap',
  'onMoveShouldSetResponder',
  'onMoveShouldSetResponderCapture',
  'onResponderEnd',
  'onResponderGrant',
  'onResponderMove',
  'onResponderReject',
  'onResponderRelease',
  'onResponderStart',
  'onResponderTerminate',
  'onResponderTerminationRequest',
  'onStartShouldSetResponder',
  'onStartShouldSetResponderCapture',
  'pointerEvents',
  'removeClippedSubviews',
  'renderToHardwareTextureAndroid',
  'shouldRasterizeIOS',
  'style',
  'testID',
  'viewRef',
  'children',
  'onMouseDown',
  'onMouseEnter',
  'onMouseLeave',
  'onMouseMove',
  'onMouseOver',
  'onMouseOut',
  'onMouseUp',
]

const transform = (source: string, j: API['jscodeshift']): string => {
  const root = j(source)
  const component = root.find(j.FunctionDeclaration).filter(p => {
    return /stacks_component/i.test(p.value.id.name)
  })

  root.find(j.Program).forEach(p => {
    const isComponent = component.length

    if (isComponent) {
      p.value.body = [
        j.importDeclaration(
          [j.importNamespaceSpecifier(j.identifier('Stacks_utils_2'))],
          j.stringLiteral('./Stacks_utils.js'),
        ),
        ...p.value.body,
      ]
    }
  })

  component.forEach(p => {
    const root = j(p.value)
    const props = []

    root
      .find(j.IfStatement)
      .filter(p => {
        return (
          p.value.test.type === 'BinaryExpression' &&
          p.value.test.operator === '!==' &&
          p.value.test.right.type === 'Identifier' &&
          p.value.test.right.name === 'undefined'
        )
      })
      .forEach(p => {
        if (
          p.value.test.type === 'BinaryExpression' &&
          p.value.test.left.type === 'Identifier' &&
          !viewProps.includes(p.value.test.left.name)
        ) {
          props.push(p.value.test.left.name)
        }
      })
      .remove()

    root
      .find(j.VariableDeclarator, {
        id: { type: 'Identifier' },
        init: { type: 'MemberExpression', object: { type: 'Identifier', name: 'Props' } },
      })
      .filter(p => {
        if (
          p.value.init.type === 'MemberExpression' &&
          p.value.init.property.type === 'Identifier'
        ) {
          const propName = p.value.init.property.name
          const length = root.find(j.Identifier, { name: propName }).length

          return length === 2
        }

        return false
      })
      .remove()

    root
      .find(j.VariableDeclarator, {
        id: { name: 'tmp' },
        init: { type: 'ObjectExpression' },
      })
      .map(p => {
        return p.get('init')
      })
      .replaceWith(p => {
        if (p.value.type === 'ObjectExpression') {
          const value = p.value as unknown as ObjectExpression

          return j.callExpression(
            j.memberExpression(j.identifier('Object'), j.identifier('assign')),
            [
              j.callExpression(
                j.memberExpression(j.identifier('Stacks_utils_2'), j.identifier('makeViewProps')),
                [j.identifier('Props')],
              ),
              j.objectExpression(
                props
                  .map(propName => {
                    return j.objectProperty(
                      j.stringLiteral(propName),
                      j.memberExpression(j.identifier('Props'), j.identifier(propName)),
                    )
                  })
                  .concat(value.properties as ObjectProperty[]),
              ),
            ],
          )
        }

        return p.value
      })
  })

  return root.toSource()
}

export default transform
