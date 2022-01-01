import { API, FileInfo } from 'jscodeshift'

import uncurry from './uncurry-functions'
import renameLiterals from './rename-literals'
import cleanupComponents from './cleanup-components'

const transform = (file: FileInfo, api: API) => {
  const j = api.jscodeshift
  const source = [uncurry, renameLiterals, cleanupComponents].reduce((acc, fn) => {
    return fn(acc, j)
  }, file.source)

  return j(source).toSource()
}

export default transform
