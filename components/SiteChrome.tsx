'use client'

import type { ReactNode } from 'react'
import { usePathname } from 'next/navigation'
import { isEditorPath } from '@/lib/editorPath'

/**
 * The menus, footer and banners around every public page. The content editor at /keystatic brings its own
 * navigation and needs the whole window, so it gets none of this. Public pages render exactly as before.
 */
export function SiteChrome({ before, after, children }: { before: ReactNode; after: ReactNode; children: ReactNode }) {
  const pathname = usePathname()
  if (isEditorPath(pathname)) return <>{children}</>

  return (
    <>
      {before}
      <main id="main-content" className="flex-grow min-h-screen pb-[calc(4.5rem+env(safe-area-inset-bottom,0px))] lg:pb-0">
        {children}
      </main>
      {after}
    </>
  )
}
