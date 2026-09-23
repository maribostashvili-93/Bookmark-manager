import AppLayout from '../../components/AppLayout/AppLayout.jsx'

function Home({ bookmarks, onTogglePin }) {
  return (
    <AppLayout
      title="All bookmarks"
      bookmarks={bookmarks}
      active="home"
      onTogglePin={onTogglePin}
    />
  )
}

export default Home
