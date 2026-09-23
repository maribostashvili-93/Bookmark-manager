import AppLayout from '../../components/AppLayout/AppLayout.jsx'

function Home({ bookmarks, onAddBookmark, onDeleteBookmark, onNavigate, onToggleArchive, onTogglePin }) {
  return (
    <AppLayout
      title="All bookmarks"
      bookmarks={bookmarks}
      active="home"
      onAddBookmark={onAddBookmark}
      onDeleteBookmark={onDeleteBookmark}
      onNavigate={onNavigate}
      onToggleArchive={onToggleArchive}
      onTogglePin={onTogglePin}
    />
  )
}

export default Home
