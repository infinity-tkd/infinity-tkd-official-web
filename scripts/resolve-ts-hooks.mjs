import { existsSync, statSync } from 'node:fs'
import path from 'node:path'
import { fileURLToPath, pathToFileURL } from 'node:url'

const projectRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')

const isFile = (candidate) => existsSync(candidate) && statSync(candidate).isFile()

/** Same order TypeScript uses: exact file, .ts, .tsx, then a folder's index.ts. */
function findFile(base) {
  for (const candidate of [base, `${base}.ts`, `${base}.tsx`, path.join(base, 'index.ts')]) {
    if (isFile(candidate)) return candidate
  }
  return null
}

export async function resolve(specifier, context, nextResolve) {
  let base = null
  if (specifier.startsWith('@/')) {
    base = path.join(projectRoot, specifier.slice(2))
  } else if ((specifier.startsWith('./') || specifier.startsWith('../')) && context.parentURL?.startsWith('file:')) {
    base = path.resolve(path.dirname(fileURLToPath(context.parentURL)), specifier)
  }
  if (base) {
    const file = findFile(base)
    if (file) return nextResolve(pathToFileURL(file).href, context)
  }
  return nextResolve(specifier, context)
}
