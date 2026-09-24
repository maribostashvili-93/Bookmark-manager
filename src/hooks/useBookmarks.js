import { useEffect, useRef, useState } from 'react'

const BOOKMARKS_STORAGE_KEY = 'bookmarks'
const REQUIRED_PROPERTIES = [
  'id', 'logo', 'title', 'url', 'fullUrl', 'description', 'tags', 'views',
  'lastVisited', 'createdAt', 'isPinned', 'isArchived',
]
let initialBookmarksRequest

function isValidBookmarkData(data) {
  return Array.isArray(data) && data.every((bookmark) =>
    bookmark
    && typeof bookmark === 'object'
    && REQUIRED_PROPERTIES.every((property) => property in bookmark)
    && Array.isArray(bookmark.tags),
  )
}

function fetchInitialBookmarks() {
  if (!initialBookmarksRequest) {
    initialBookmarksRequest = fetch('/data/bookmarks.json')
      .then((response) => {
        if (!response.ok) throw new Error(`Unable to load bookmarks (${response.status})`)
        return response.json()
      })
      .then((data) => {
        if (!isValidBookmarkData(data)) throw new Error('Bookmark data is invalid')
        return data
      })
  }
  return initialBookmarksRequest
}

async function loadBookmarks() {
  try {
    const savedValue = localStorage.getItem(BOOKMARKS_STORAGE_KEY)
    if (savedValue !== null) {
      const parsedValue = JSON.parse(savedValue)
      if (isValidBookmarkData(parsedValue)) return parsedValue
    }
  } catch {
    // Storage may be unavailable or malformed; use the JSON seed instead.
  }
  return fetchInitialBookmarks()
}

export default function useBookmarks() {
  const [bookmarks, setBookmarks] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)
  const hasLoadedBookmarks = useRef(false)

  useEffect(() => {
    let isCurrent = true
    loadBookmarks()
      .then((data) => {
        if (!isCurrent) return
        hasLoadedBookmarks.current = true
        setBookmarks(data)
      })
      .catch((loadError) => {
        if (isCurrent) setError(loadError.message)
      })
      .finally(() => {
        if (isCurrent) setIsLoading(false)
      })

    return () => { isCurrent = false }
  }, [])

  useEffect(() => {
    if (!hasLoadedBookmarks.current) return
    try {
      localStorage.setItem(BOOKMARKS_STORAGE_KEY, JSON.stringify(bookmarks))
    } catch {
      // Keep bookmark actions available when storage is unavailable.
    }
  }, [bookmarks])

  function handleTogglePin(bookmarkId) {
    setBookmarks((current) => current.map((bookmark) =>
      bookmark.id === bookmarkId ? { ...bookmark, isPinned: !bookmark.isPinned } : bookmark,
    ))
  }

  function handleToggleArchive(bookmarkId) {
    setBookmarks((current) => current.map((bookmark) =>
      bookmark.id === bookmarkId ? { ...bookmark, isArchived: !bookmark.isArchived } : bookmark,
    ))
  }

  function handleAddBookmark(bookmarkData) {
    setBookmarks((current) => [...current, {
      id: Date.now(), ...bookmarkData, logo: '/favicon.svg', views: 0,
      lastVisited: 'Never', isPinned: false, isArchived: false,
      createdAt: new Date().toISOString(),
    }])
  }

  function handleDeleteBookmark(bookmarkId) {
    setBookmarks((current) => current.filter((bookmark) => bookmark.id !== bookmarkId))
  }

  function handleUpdateBookmark(bookmarkId, bookmarkData) {
    setBookmarks((current) => current.map((bookmark) =>
      bookmark.id === bookmarkId ? { ...bookmark, ...bookmarkData, id: bookmark.id } : bookmark,
    ))
  }

  return { bookmarks, error, isLoading, handleAddBookmark, handleDeleteBookmark, handleToggleArchive, handleTogglePin, handleUpdateBookmark }
}
