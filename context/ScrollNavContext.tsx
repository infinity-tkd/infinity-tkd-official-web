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

  // Navigation never hides while the mobile drawer is open.
  const { isNavVisible, isScrolled } = useScrollNav({ disabled: isMobileMenuOpen })

  const value = React.useMemo<ScrollNavContextValue>(
    () => ({ isNavVisible, isScrolled, isMobileMenuOpen, setIsMobileMenuOpen }),
    [isNavVisible, isScrolled, isMobileMenuOpen]
  )

  return <ScrollNavContext.Provider value={value}>{children}</ScrollNavContext.Provider>
}

export function useScrollNavContext(): ScrollNavContextValue {
  const context = React.useContext(ScrollNavContext)
  if (!context) {
    throw new Error('useScrollNavContext must be used within a ScrollNavProvider')
  }
  return context
}
