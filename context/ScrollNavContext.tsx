'use client'

import * as React from 'react'
import { useScrollNav, type ScrollNavState } from '@/hooks/useScrollNav'

interface ScrollNavContextValue extends ScrollNavState {
  isMobileMenuOpen: boolean
  setIsMobileMenuOpen: (open: boolean) => void
}

const ScrollNavContext = React.createContext<ScrollNavContextValue | undefined>(undefined)

export function ScrollNavProvider({ children }: { children: React.ReactNode }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false)

  // Pass disabled: isMobileMenuOpen so navigation never hides while mobile drawer is open
  const scrollNav = useScrollNav({ disabled: isMobileMenuOpen })

  const value = React.useMemo<ScrollNavContextValue>(
    () => ({
      ...scrollNav,
      isMobileMenuOpen,
      setIsMobileMenuOpen,
    }),
    [scrollNav, isMobileMenuOpen]
  )

  return <ScrollNavContext.Provider value={value}>{children}</ScrollNavContext.Provider>
}

export function useScrollNavContext(): ScrollNavContextValue {
  const context = React.useContext(ScrollNavContext)
  if (!context) {
    // Graceful fallback to standalone hook if used outside provider
    const scrollNav = useScrollNav()
    return {
      ...scrollNav,
      isMobileMenuOpen: false,
      setIsMobileMenuOpen: () => {},
    }
  }
  return context
}
