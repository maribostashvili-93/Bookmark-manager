import AppLayout from '../../components/AppLayout/AppLayout.jsx'
import { archivedBookmarks } from '../../data/bookmarks.js'

function Archived() {
  return <AppLayout title="Archived bookmarks" bookmarks={archivedBookmarks} active="archived" />
}

export default Archived
