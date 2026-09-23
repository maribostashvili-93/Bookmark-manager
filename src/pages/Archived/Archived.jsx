import AppLayout from '../../components/AppLayout/AppLayout.jsx'

function Archived({ bookmarks, emptyMessage, onAddBookmark, onDeleteBookmark, onNavigate, onSearchChange, onToggleArchive, onUpdateBookmark, searchTerm }) {
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
      onToggleArchive={onToggleArchive}
      onUpdateBookmark={onUpdateBookmark}
      searchValue={searchTerm}
    />
  )
}

export default Archived
