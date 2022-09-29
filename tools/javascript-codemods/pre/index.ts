import { API, FileInfo } from 'jscodeshift'

import uncurry from './uncurry-functions'
import renameLiterals from './rename-literals'
import cleanupComponents from './cleanup-components'
import addAsProp from './add-as-prop'

const transform = (file: FileInfo, api: API) => {
  const j = api.jscodeshift
  const source = [uncurry, renameLiterals, cleanupComponents, addAsProp].reduce((acc, fn) => {
    return fn(acc, j)
  }, file.source)

  return j(source).toSource()
}

export default transform
