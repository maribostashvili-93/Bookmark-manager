import { useState } from 'react'
import Home from './pages/Home/Home.jsx'
import { bookmarks as initialBookmarks } from './data/bookmarks.js'

// Pages: Home, Archived, Tagged, Search, SignIn, SignUp, ForgotPassword (see src/pages)
// Prototype states (open menus, modals, drawer): see src/pages/Screens.jsx
// Swap the component below to preview another page until routing is added.
function App() {
  const [bookmarks, setBookmarks] = useState(initialBookmarks)

  function handleTogglePin(bookmarkId) {
    setBookmarks((currentBookmarks) =>
      currentBookmarks.map((bookmark) =>
        bookmark.id === bookmarkId
          ? { ...bookmark, isPinned: !bookmark.isPinned }
          : bookmark,
      ),
    )
  }

  return (
    <Home
      bookmarks={bookmarks}
      onTogglePin={handleTogglePin}
    />
  )
}

export default App
