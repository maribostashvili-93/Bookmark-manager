import { useState } from 'react'
import Home from './pages/Home/Home.jsx'
import Archived from './pages/Archived/Archived.jsx'
import SignIn from './pages/SignIn/SignIn.jsx'
import SignUp from './pages/SignUp/SignUp.jsx'
import ForgotPassword from './pages/ForgotPassword/ForgotPassword.jsx'
import useBookmarks from './hooks/useBookmarks.js'
import { getVisibleBookmarks } from './utils/bookmarkPipeline.js'

function App() {
  const {
    bookmarks,
    error,
    isLoading,
    handleAddBookmark,
    handleDeleteBookmark,
    handleToggleArchive,
    handleTogglePin,
    handleUpdateBookmark,
  } = useBookmarks()
  const [currentView, setCurrentView] = useState('home')
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedTag, setSelectedTag] = useState('')
  const [sortOption, setSortOption] = useState('Recently added')

  const visibleBookmarks = getVisibleBookmarks(bookmarks, {
    currentView,
    searchTerm,
    selectedTag,
    sortOption,
  })
  const hasSearchTerm = searchTerm.trim().length > 0

  function handleAddAndShowBookmark(bookmarkData) {
    handleAddBookmark(bookmarkData)
    setCurrentView('home')
  }

  const sharedPageProps = {
    bookmarks: visibleBookmarks,
    error,
    isLoading,
    onAddBookmark: handleAddAndShowBookmark,
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

  if (currentView === 'signin') {
    return <SignIn onNavigate={setCurrentView} />
  }

  if (currentView === 'signup') {
    return <SignUp onNavigate={setCurrentView} />
  }

  if (currentView === 'forgot-password') {
    return <ForgotPassword onNavigate={setCurrentView} />
  }

  return currentView === 'archived'
    ? <Archived {...sharedPageProps} />
    : <Home {...sharedPageProps} />
}

export default App
