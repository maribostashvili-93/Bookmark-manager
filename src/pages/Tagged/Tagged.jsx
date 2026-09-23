import AppLayout from '../../components/AppLayout/AppLayout.jsx'

function Tagged({ bookmarks = [], selectedTags = [] }) {
  return (
    <AppLayout
      title="Bookmarks tagged:"
      highlight={selectedTags.join(', ')}
      bookmarks={bookmarks}
      active={null}
      selectedTags={selectedTags}
    />
  )
}

export default Tagged
