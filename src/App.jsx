import { useState } from 'react'
import Home from './pages/Home/Home.jsx'
import Archived from './pages/Archived/Archived.jsx'
import {
  bookmarks as activeBookmarks,
  archivedBookmarks,
} from './data/bookmarks.js'

const initialBookmarks = [...activeBookmarks, ...archivedBookmarks]

// Pages: Home, Archived, Tagged, Search, SignIn, SignUp, ForgotPassword (see src/pages)
// Prototype states (open menus, modals, drawer): see src/pages/Screens.jsx
// Swap the component below to preview another page until routing is added.
function App() {
  const [bookmarks, setBookmarks] = useState(initialBookmarks)
  const [currentView, setCurrentView] = useState('home')
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedTag, setSelectedTag] = useState('')

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

  const normalizedSearchTerm = searchTerm.trim().toLowerCase()
  const visibleBookmarks = bookmarks.filter((bookmark) => {
    const belongsToCurrentView = currentView === 'archived'
      ? bookmark.isArchived
      : !bookmark.isArchived
    const matchesSearch = !normalizedSearchTerm
      || bookmark.title.toLowerCase().includes(normalizedSearchTerm)
      || bookmark.description.toLowerCase().includes(normalizedSearchTerm)
    const matchesTag = !selectedTag
      || bookmark.tags.some((tag) => tag.toLowerCase() === selectedTag.toLowerCase())

    return belongsToCurrentView && matchesSearch && matchesTag
  })

  const sharedPageProps = {
    bookmarks: visibleBookmarks,
    onAddBookmark: handleAddBookmark,
    onDeleteBookmark: handleDeleteBookmark,
    onNavigate: setCurrentView,
    onSearchChange: setSearchTerm,
    onTagChange: setSelectedTag,
    onToggleArchive: handleToggleArchive,
    onTogglePin: handleTogglePin,
    onUpdateBookmark: handleUpdateBookmark,
    searchTerm,
    selectedTag,
    emptyMessage: normalizedSearchTerm
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
