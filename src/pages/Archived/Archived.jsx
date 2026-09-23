import AppLayout from '../../components/AppLayout/AppLayout.jsx'

function Archived({ bookmarks, onNavigate, onToggleArchive }) {
  return (
    <AppLayout
      title="Archived bookmarks"
      bookmarks={bookmarks}
      active="archived"
      emptyMessage="You don't have any archived bookmarks."
      onNavigate={onNavigate}
      onToggleArchive={onToggleArchive}
    />
  )
}

export default Archived
