import AppLayout from '../../components/AppLayout/AppLayout.jsx'

function Search({ bookmarks = [], searchTerm = '' }) {
  return (
    <AppLayout
      title="Results for:"
      highlight={`“${searchTerm}”`}
      bookmarks={bookmarks}
      active="home"
      searchValue={searchTerm}
    />
  )
}

export default Search
