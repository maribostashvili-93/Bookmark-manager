import AppLayout from '../../components/AppLayout/AppLayout.jsx'

function Home({ bookmarks, emptyMessage, onAddBookmark, onDeleteBookmark, onNavigate, onSearchChange, onSortChange, onTagChange, onToggleArchive, onTogglePin, onUpdateBookmark, searchTerm, selectedTag, sortOption }) {
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
      onSortChange={onSortChange}
      onTagChange={onTagChange}
      onToggleArchive={onToggleArchive}
      onTogglePin={onTogglePin}
      onUpdateBookmark={onUpdateBookmark}
      searchValue={searchTerm}
      selectedTag={selectedTag}
      sortOption={sortOption}
    />
  )
}

export default Home
