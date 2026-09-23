import { useEffect, useState } from 'react'
import Home from './pages/Home/Home.jsx'
import Archived from './pages/Archived/Archived.jsx'

let initialBookmarksRequest

function fetchInitialBookmarks() {
  if (!initialBookmarksRequest) {
    initialBookmarksRequest = fetch('/data/bookmarks.json').then((response) => {
      if (!response.ok) {
        throw new Error(`Unable to load bookmarks (${response.status})`)
      }

      return response.json()
    }).then((data) => {
      if (!Array.isArray(data)) {
        throw new Error('Bookmark data must be an array')
      }

      return data
    })
  }

  return initialBookmarksRequest
}

function filterByView(bookmarks, currentView) {
  return bookmarks.filter((bookmark) =>
    currentView === 'archived' ? bookmark.isArchived : !bookmark.isArchived,
  )
}

function filterBySearch(bookmarks, searchTerm) {
  const normalizedSearchTerm = searchTerm.trim().toLowerCase()

  if (!normalizedSearchTerm) {
    return bookmarks
  }

  return bookmarks.filter((bookmark) =>
    bookmark.title.toLowerCase().includes(normalizedSearchTerm)
    || bookmark.description.toLowerCase().includes(normalizedSearchTerm),
  )
}

function filterByTag(bookmarks, selectedTag) {
  if (!selectedTag) {
    return bookmarks
  }

  return bookmarks.filter((bookmark) =>
    bookmark.tags.some((tag) => tag.toLowerCase() === selectedTag.toLowerCase()),
  )
}

function getDateValue(value) {
  if (!value || value === 'Never') {
    return 0
  }

  const timestamp = Date.parse(value)
  return Number.isNaN(timestamp) ? 0 : timestamp
}

function sortBookmarks(bookmarks, sortOption) {
  return [...bookmarks].sort((firstBookmark, secondBookmark) => {
    if (sortOption === 'Most visited') {
      return secondBookmark.views - firstBookmark.views
    }

    if (sortOption === 'Recently visited') {
      return getDateValue(secondBookmark.lastVisited) - getDateValue(firstBookmark.lastVisited)
    }

    return getDateValue(secondBookmark.createdAt) - getDateValue(firstBookmark.createdAt)
  })
}

function movePinnedFirst(bookmarks) {
  return [...bookmarks].sort(
    (firstBookmark, secondBookmark) => Number(secondBookmark.isPinned) - Number(firstBookmark.isPinned),
  )
}

// App owns the bookmark collection and the derived view/filter/sort pipeline.
function App() {
  const [bookmarks, setBookmarks] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)
  const [currentView, setCurrentView] = useState('home')
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedTag, setSelectedTag] = useState('')
  const [sortOption, setSortOption] = useState('Recently added')

  useEffect(() => {
    let isCurrent = true

    fetchInitialBookmarks()
      .then((data) => {
        if (isCurrent) {
          setBookmarks(data)
        }
      })
      .catch((fetchError) => {
        if (isCurrent) {
          setError(fetchError.message)
        }
      })
      .finally(() => {
        if (isCurrent) {
          setIsLoading(false)
        }
      })

    return () => {
      isCurrent = false
    }
  }, [])

  function handleTogglePin(bookmarkId) {
    setBookmarks((currentBookmarks) =>
      currentBookmarks.map((bookmark) =>
        bookmark.id === bookmarkId
          ? { ...bookmark, isPinned: !bookmark.isPinned }
          : bookmark,
      ),
    )
  }

  function handleToggleArchive(bookmarkId) {
    setBookmarks((currentBookmarks) =>
      currentBookmarks.map((bookmark) =>
        bookmark.id === bookmarkId
          ? { ...bookmark, isArchived: !bookmark.isArchived }
          : bookmark,
      ),
    )
  }

  function handleAddBookmark(bookmarkData) {
    const newBookmark = {
      id: Date.now(),
      ...bookmarkData,
      logo: '/favicon.svg',
      views: 0,
      lastVisited: 'Never',
      isPinned: false,
      isArchived: false,
      createdAt: new Date().toISOString(),
    }

    setBookmarks((currentBookmarks) => [...currentBookmarks, newBookmark])
    setCurrentView('home')
  }

  function handleDeleteBookmark(bookmarkId) {
    setBookmarks((currentBookmarks) =>
      currentBookmarks.filter((bookmark) => bookmark.id !== bookmarkId),
    )
  }

  function handleUpdateBookmark(bookmarkId, bookmarkData) {
    setBookmarks((currentBookmarks) =>
      currentBookmarks.map((bookmark) =>
        bookmark.id === bookmarkId
          ? { ...bookmark, ...bookmarkData, id: bookmark.id }
          : bookmark,
      ),
    )
  }

  const viewBookmarks = filterByView(bookmarks, currentView)
  const searchedBookmarks = filterBySearch(viewBookmarks, searchTerm)
  const taggedBookmarks = filterByTag(searchedBookmarks, selectedTag)
  const sortedBookmarks = sortBookmarks(taggedBookmarks, sortOption)
  const visibleBookmarks = movePinnedFirst(sortedBookmarks)
  const hasSearchTerm = searchTerm.trim().length > 0

  const sharedPageProps = {
    bookmarks: visibleBookmarks,
    error,
    isLoading,
    onAddBookmark: handleAddBookmark,
    onDeleteBookmark: handleDeleteBookmark,
    onNavigate: setCurrentView,
    onSearchChange: setSearchTerm,
    onSortChange: setSortOption,
    onTagChange: setSelectedTag,
    onToggleArchive: handleToggleArchive,
    onTogglePin: handleTogglePin,
    onUpdateBookmark: handleUpdateBookmark,
    searchTerm,
    selectedTag,
    sortOption,
    emptyMessage: hasSearchTerm
      ? 'No bookmarks match your search.'
      : selectedTag
        ? `No bookmarks found with the "${selectedTag}" tag.`
        : undefined,
  }

  return currentView === 'archived'
    ? <Archived {...sharedPageProps} />
    : <Home {...sharedPageProps} />
}

export default App
