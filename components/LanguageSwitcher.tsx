'use client'

import * as React from 'react'
import { Globe, ChevronDown, Check } from 'lucide-react'
import { useLanguage } from '@/context/LanguageContext'
import { type Language } from '@/data/translations'
import { cn } from '@/lib/utils'

interface LanguageSwitcherProps {
  variant?: 'header' | 'footer' | 'mobile'
  className?: string
}

export function LanguageSwitcher({ variant = 'header', className }: LanguageSwitcherProps) {
  const { language, setLanguage, currentLanguageOption, availableLanguages } = useLanguage()
  const [isOpen, setIsOpen] = React.useState(false)
  const dropdownRef = React.useRef<HTMLDivElement>(null)

  // Close dropdown when clicking outside
  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  if (variant === 'mobile') {
    return (
      <div className={cn('w-full grid grid-cols-2 gap-1.5 p-1 rounded-2xl bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800', className)}>
        {availableLanguages.map((lang) => (
          <button
            key={lang.code}
            onClick={() => setLanguage(lang.code)}
            className={cn(
              'min-h-[44px] py-2 px-3 rounded-xl text-xs font-bold transition-all duration-300 flex items-center justify-center gap-1.5 cursor-pointer',
              language === lang.code
                ? 'bg-white dark:bg-zinc-800 text-brand-red shadow-sm'
                : 'text-zinc-500 hover:text-zinc-900 dark:hover:text-white'
            )}
          >
            <span>{lang.flag}</span>
            <span className="truncate">{lang.nativeName}</span>
          </button>
        ))}
      </div>
    )
  }

  if (variant === 'footer') {
    return (
      <div className={cn('inline-flex flex-wrap items-center gap-1.5 p-1 rounded-full bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-sm', className)}>
        <div className="pl-2.5 text-zinc-400">
          <Globe className="w-3.5 h-3.5" />
        </div>
        {availableLanguages.map((lang) => (
          <button
            key={lang.code}
            onClick={() => setLanguage(lang.code)}
            className={cn(
              'px-3 py-1.5 rounded-full text-xs font-bold transition-all duration-300 flex items-center gap-1',
              language === lang.code
                ? 'bg-brand-red text-white shadow-brand-glow'
                : 'text-zinc-600 dark:text-zinc-400 hover:text-brand-red'
            )}
          >
            <span>{lang.flag}</span>
            <span>{lang.nativeName}</span>
          </button>
        ))}
      </div>
    )
  }

  // Header Dropdown Variant (Default)
  return (
    <div className={cn('relative inline-block text-left', className)} ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-1.5 px-3 py-2 min-h-[44px] rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50/80 dark:bg-zinc-900/80 hover:border-brand-red/40 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-all duration-300 text-xs font-bold text-zinc-700 dark:text-zinc-300 shadow-sm cursor-pointer"
        aria-expanded={isOpen}
        aria-haspopup="true"
        aria-label="Select Language / ជ្រើសរើសភាសា / 选择语言 / 언어 선택"
      >
        <Globe className="w-3.5 h-3.5 text-brand-red shrink-0" />
        <span className="mr-0.5">{currentLanguageOption.flag}</span>
        <span className="hidden sm:inline-block font-semibold">{currentLanguageOption.nativeName}</span>
        <ChevronDown
          className={cn('w-3 h-3 text-zinc-400 transition-transform duration-300 shrink-0', isOpen && '-rotate-180')}
        />
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 rounded-xl bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 shadow-2xl p-1.5 z-50 animate-fade-in">
          {availableLanguages.map((lang) => {
            const isSelected = language === lang.code
            return (
              <button
                key={lang.code}
                onClick={() => {
                  setLanguage(lang.code)
                  setIsOpen(false)
                }}
                className={cn(
                  'w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs font-bold transition-all text-left',
                  isSelected
                    ? 'bg-brand-red/10 text-brand-red dark:bg-brand-red/20'
                    : 'text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-900'
                )}
              >
                <div className="flex items-center gap-2.5">
                  <span className="text-base">{lang.flag}</span>
                  <div>
                    <span className="block font-bold">{lang.nativeName}</span>
                    <span className="text-[10px] text-zinc-400 font-normal">{lang.label}</span>
                  </div>
                </div>
                {isSelected && <Check className="w-4 h-4 text-brand-red" />}
              </button>
            )
          })}
        </div>
      )}
    </div>
  )
}
