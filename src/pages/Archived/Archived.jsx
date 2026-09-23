import AppLayout from '../../components/AppLayout/AppLayout.jsx'

function Archived({ bookmarks, emptyMessage, onAddBookmark, onDeleteBookmark, onNavigate, onSearchChange, onTagChange, onToggleArchive, onUpdateBookmark, searchTerm, selectedTag }) {
  return (
    <AppLayout
      title="Archived bookmarks"
      bookmarks={bookmarks}
      active="archived"
      emptyMessage={emptyMessage ?? "You don't have any archived bookmarks."}
      onAddBookmark={onAddBookmark}
      onDeleteBookmark={onDeleteBookmark}
      onNavigate={onNavigate}
      onSearchChange={onSearchChange}
      onTagChange={onTagChange}
      onToggleArchive={onToggleArchive}
      onUpdateBookmark={onUpdateBookmark}
      searchValue={searchTerm}
      selectedTag={selectedTag}
    />
  )
}

export default Archived
