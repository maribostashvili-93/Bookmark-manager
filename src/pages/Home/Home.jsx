import AppLayout from '../../components/AppLayout/AppLayout.jsx'
import { bookmarks } from '../../data/bookmarks.js'

function Home() {
  return <AppLayout title="All bookmarks" bookmarks={bookmarks} active="home" />
}

export default Home
