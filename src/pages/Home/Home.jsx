import AppLayout from '../../components/AppLayout/AppLayout.jsx'

function Home({ bookmarks, onAddBookmark, onNavigate, onToggleArchive, onTogglePin }) {
  return (
    <AppLayout
      title="All bookmarks"
      bookmarks={bookmarks}
      active="home"
      onAddBookmark={onAddBookmark}
      onNavigate={onNavigate}
      onToggleArchive={onToggleArchive}
      onTogglePin={onTogglePin}
    />
  )
}

export default Home
