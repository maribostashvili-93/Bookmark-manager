import AppLayout from '../../components/AppLayout/AppLayout.jsx'

function Home({ bookmarks, emptyMessage, onAddBookmark, onDeleteBookmark, onNavigate, onSearchChange, onTagChange, onToggleArchive, onTogglePin, onUpdateBookmark, searchTerm, selectedTag }) {
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
      onTagChange={onTagChange}
      onToggleArchive={onToggleArchive}
      onTogglePin={onTogglePin}
      onUpdateBookmark={onUpdateBookmark}
      searchValue={searchTerm}
      selectedTag={selectedTag}
    />
  )
}

export default Home
