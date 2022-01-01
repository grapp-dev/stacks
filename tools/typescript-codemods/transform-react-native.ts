import { API } from 'jscodeshift'

const transform = (source: string, j: API['jscodeshift']): string => {
  const root = j(source)

  const viewRef = j.tsTypeReference(
    j.tsQualifiedName(j.identifier('React'), j.identifier('RefObject')),
  )
  viewRef.typeParameters = j.tsTypeParameterInstantiation([j.tsTypeReference(j.identifier('View'))])

  const style = j.tsTypeReference(j.identifier('StyleProp'))
  style.typeParameters = j.tsTypeParameterInstantiation([
    j.tsTypeReference(j.identifier('ViewStyle')),
  ])

  const importsMap = []
  const addImport = (importName: string) => {
    const hasImport = importsMap.some(name => name === importName)

    if (!hasImport) {
      importsMap.push(importName)
    }
  }
  const map = [
    ['ReactNative_Event_pressEvent', 'GestureResponderEvent'],
    ['ReactNative_Event_layoutEvent', 'LayoutChangeEvent'],
    ['ReactNative_View_ref', viewRef, ['View']],
    ['ReactNative_Style_t', style, ['StyleProp', 'ViewStyle']],
    [
      'ReactNative_Accessibility_liveRegion',
      j.tsIndexedAccessType(
        j.tsTypeReference(j.identifier('AccessibilityPropsAndroid')),
        j.tsLiteralType(j.stringLiteral('accessibilityLiveRegion')),
      ),
      ['AccessibilityPropsAndroid'],
    ],
    ['ReactNative_Accessibility_role', 'AccessibilityRole'],
    ['ReactNative_Accessibility_value', 'AccessibilityValue'],
    ['ReactNative_Accessibility_state', 'AccessibilityState'],
    ['ReactNative_Accessibility_actionInfo', 'AccessibilityActionInfo'],
    ['ReactNative_View_View_edgeInsets', 'Insets'],
    ['ReactNative_Dimensions_displayMetrics', 'ScaledSize'],
  ] as const

  root
    .find(j.TSFunctionType)
    .filter(p => {
      return map.some(
        ([id]) =>
          p.value.typeAnnotation.typeAnnotation.type === 'TSTypeReference' &&
          p.value.typeAnnotation.typeAnnotation.typeName.type === 'Identifier' &&
          p.value.typeAnnotation.typeAnnotation.typeName.name === id,
      )
    })
    .replaceWith(p => {
      const fn = j.tsFunctionType(p.value.parameters)
      fn.typeParameters = p.value.typeParameters
      fn.typeAnnotation = j.tsTypeAnnotation(p.value.typeAnnotation.typeAnnotation)
      return fn
    })

  root
    .find(j.TSTypeReference)
    .filter(p => {
      return map.some(
        ([id]) => p.value.typeName.type === 'Identifier' && p.value.typeName.name === id,
      )
    })
    .replaceWith(p => {
      const [, value, imports] = map.find(
        ([id]) => p.value.typeName.type === 'Identifier' && p.value.typeName.name === id,
      )

      if (typeof value === 'string') {
        addImport(value)
        return j.identifier(value)
      }

      imports.forEach(addImport)

      return value
    })

  root.find(j.Program).forEach(p => {
    if (importsMap.length) {
      p.value.body = [
        j.importDeclaration(
          importsMap.map(value => j.importSpecifier(j.identifier(value))),
          j.stringLiteral('react-native'),
        ),
        ...p.value.body,
      ]
    }
  })

  root
    .find(j.ImportSpecifier)
    .filter(p => {
      return map.some(
        ([id]) => p.value.local && p.value.local.type === 'Identifier' && p.value.local.name === id,
      )
    })
    .map(p => p.parent)
    .remove()

  root
    .find(j.Identifier, {
      name: '_1',
    })
    .forEach(p => {
      p.value.name = 'event'
    })

  return root.toSource()
}

export default transform
