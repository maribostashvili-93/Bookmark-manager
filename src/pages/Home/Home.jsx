import AppLayout from '../../components/AppLayout/AppLayout.jsx'

function Home({ bookmarks, emptyMessage, onAddBookmark, onDeleteBookmark, onNavigate, onSearchChange, onToggleArchive, onTogglePin, onUpdateBookmark, searchTerm }) {
  return (
    <AppLayout
      title="All bookmarks"
      bookmarks={bookmarks}
      emptyMessage={emptyMessage}
      active="home"
      onAddBookmark={onAddBookmark}
      onDeleteBookmark={onDeleteBookmark}
      onNavigate={onNavigate}
      onSearchChange={onSearchChange}
      onToggleArchive={onToggleArchive}
      onTogglePin={onTogglePin}
      onUpdateBookmark={onUpdateBookmark}
      searchValue={searchTerm}
    />
  )
}

export default Home
