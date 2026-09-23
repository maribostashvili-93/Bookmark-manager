import AppLayout from '../../components/AppLayout/AppLayout.jsx'
import { taggedBookmarks, selectedTags } from '../../data/bookmarks.js'

function Tagged() {
  return (
    <AppLayout
      title="Bookmarks tagged:"
      highlight={selectedTags.join(', ')}
      bookmarks={taggedBookmarks}
      active={null}
      selectedTags={selectedTags}
    />
  )
}

export default Tagged
