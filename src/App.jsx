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
      id: crypto.randomUUID(),
      ...bookmarkData,
      logo: '/favicon.svg',
      views: 0,
      lastVisited: 'Never',
      createdAt: new Date().toLocaleDateString('en-GB', {
        day: '2-digit',
        month: 'short',
      }),
      isPinned: false,
      isArchived: false,
    }

    setBookmarks((currentBookmarks) => [...currentBookmarks, newBookmark])
    setCurrentView('home')
  }

  const visibleBookmarks = bookmarks.filter((bookmark) =>
    currentView === 'archived' ? bookmark.isArchived : !bookmark.isArchived,
  )

  const sharedPageProps = {
    bookmarks: visibleBookmarks,
    onAddBookmark: handleAddBookmark,
    onNavigate: setCurrentView,
    onToggleArchive: handleToggleArchive,
    onTogglePin: handleTogglePin,
  }

  return currentView === 'archived'
    ? <Archived {...sharedPageProps} />
    : <Home {...sharedPageProps} />
}

export default App
