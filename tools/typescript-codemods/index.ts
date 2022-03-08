import { API, FileInfo } from 'jscodeshift'

import transformReactNative from './transform-react-native'
import prettifyStacksTypes from './prettify-stacks-types'
import shrinkComponentType from './shrink-component-type'
import renameLiterals from './rename-literals'

const transform = (file: FileInfo, api: API) => {
  const j = api.jscodeshift
  const source = [
    transformReactNative,
    prettifyStacksTypes,
    shrinkComponentType,
    renameLiterals,
  ].reduce((acc, fn) => {
    return fn(acc, j)
  }, file.source)

  return j(source).toSource()
}

export default transform