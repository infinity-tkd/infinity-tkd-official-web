/**
 * ==============================================================================
 * CURRICULUM LIBRARY CRUD DATA MANAGER
 * ==============================================================================
 * Client-safe, persistent CRUD store allowing creating, updating, deleting,
 * resetting, importing, and exporting all technique and rule records.
 * ==============================================================================
 */

import { libraryItems as defaultItems, type LibraryItem, type LibraryCategory, type DifficultyLevel } from '@/data/library'

const STORAGE_KEY = 'infinity_tkd_library_custom_v1'

/**
 * Get all library items (combining defaults with client-side localStorage overrides if present)
 */
export function getLibraryItems(): LibraryItem[] {
  if (typeof window === 'undefined') {
    return defaultItems
  }
  try {
    const saved = localStorage.getItem(STORAGE_KEY)
    if (saved) {
      const parsed = JSON.parse(saved)
      if (Array.isArray(parsed) && parsed.length > 0) {
        return parsed
      }
    }
  } catch (e) {
    console.error('Failed to load library items from localStorage:', e)
  }
  return defaultItems
}

/**
 * Save updated library items list to localStorage
 */
export function saveLibraryItems(items: LibraryItem[]): boolean {
  if (typeof window === 'undefined') return false
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(items))
    return true
  } catch (e) {
    console.error('Failed to save library items to localStorage:', e)
    return false
  }
}

/**
 * CREATE a new Library Item
 */
export function createLibraryItem(newItem: Omit<LibraryItem, 'id' | 'slug'> & { id?: string; slug?: string }): { success: boolean; item?: LibraryItem; error?: string } {
  try {
    const current = getLibraryItems()
    const id = newItem.id || `custom-${Date.now()}`
    const slug = newItem.slug || newItem.name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')
    
    if (current.some((i) => i.id === id || i.slug === slug)) {
      return { success: false, error: 'An item with this ID or slug already exists.' }
    }

    const fullItem: LibraryItem = {
      ...newItem,
      id,
      slug,
      badgeColor: newItem.badgeColor || '#EF2F38',
      steps: newItem.steps || [],
      keyDetails: newItem.keyDetails || [],
      commonMistakes: newItem.commonMistakes || [],
      image: newItem.image || 'https://images.unsplash.com/photo-1544717305-2782549b5136?q=80&w=800&auto=format&fit=crop',
    }

    const updated = [fullItem, ...current]
    saveLibraryItems(updated)
    return { success: true, item: fullItem }
  } catch (err: any) {
    return { success: false, error: err?.message || 'Failed to create item' }
  }
}

/**
 * UPDATE an existing Library Item by ID
 */
export function updateLibraryItem(id: string, updates: Partial<LibraryItem>): { success: boolean; item?: LibraryItem; error?: string } {
  try {
    const current = getLibraryItems()
    const index = current.findIndex((i) => i.id === id)
    if (index === -1) {
      return { success: false, error: `Item with id "${id}" not found.` }
    }

    const updatedItem: LibraryItem = {
      ...current[index],
      ...updates,
      id: current[index].id, // keep immutable id
    }

    current[index] = updatedItem
    saveLibraryItems(current)
    return { success: true, item: updatedItem }
  } catch (err: any) {
    return { success: false, error: err?.message || 'Failed to update item' }
  }
}

/**
 * DELETE a Library Item by ID
 */
export function deleteLibraryItem(id: string): { success: boolean; error?: string } {
  try {
    const current = getLibraryItems()
    const filtered = current.filter((i) => i.id !== id)
    if (filtered.length === current.length) {
      return { success: false, error: `Item with id "${id}" not found.` }
    }
    saveLibraryItems(filtered)
    return { success: true }
  } catch (err: any) {
    return { success: false, error: err?.message || 'Failed to delete item' }
  }
}

/**
 * RESET Library to system default dataset
 */
export function resetLibraryToDefault(): boolean {
  if (typeof window === 'undefined') return false
  try {
    localStorage.removeItem(STORAGE_KEY)
    return true
  } catch (e) {
    return false
  }
}
