import AppLayout from '../../components/AppLayout/AppLayout.jsx'

function Home({ bookmarks }) {
  return <AppLayout title="All bookmarks" bookmarks={bookmarks} active="home" />
}

export default Home
