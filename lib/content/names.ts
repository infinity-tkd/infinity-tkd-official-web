/**
 * Names shown for students. The website shows a first name or initials ("Sophea", "Sophea P."), never a full name, so
 * a child cannot be identified by name. `npm run check:data` warns when a name looks like a full name.
 * Plain TypeScript with no imports (it runs with Node's type stripping).
 */

/**
 * True for a name made of two or more words where a later word is a whole name and not an initial: "Sokha Rith",
 * "Sokha Rith Chan". False for "Sokha", "Borey K.", "Borey K" and "Mary-Ann". (Non-Latin names count words the same way.)
 */
export function looksLikeFullName(name: string): boolean {
  const words = name.trim().split(/\s+/).filter(Boolean)
  return words.length >= 2 && words.slice(1).some((word) => word.replace(/\.$/, '').length >= 2)
}
