import AppLayout from '../../components/AppLayout/AppLayout.jsx'

function Archived({ bookmarks, onAddBookmark, onDeleteBookmark, onNavigate, onToggleArchive }) {
  return (
    <AppLayout
      title="Archived bookmarks"
      bookmarks={bookmarks}
      active="archived"
      emptyMessage="You don't have any archived bookmarks."
      onAddBookmark={onAddBookmark}
      onDeleteBookmark={onDeleteBookmark}
      onNavigate={onNavigate}
      onToggleArchive={onToggleArchive}
    />
  )
}

export default Archived
