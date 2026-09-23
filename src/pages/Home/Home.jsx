import AppLayout from '../../components/AppLayout/AppLayout.jsx'

function Home({ bookmarks, onNavigate, onToggleArchive, onTogglePin }) {
  return (
    <AppLayout
      title="All bookmarks"
      bookmarks={bookmarks}
      active="home"
      onNavigate={onNavigate}
      onToggleArchive={onToggleArchive}
      onTogglePin={onTogglePin}
    />
  )
}

export default Home
