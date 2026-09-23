import AppLayout from '../../components/AppLayout/AppLayout.jsx'
import { searchResults, searchQuery } from '../../data/bookmarks.js'

function Search() {
  return (
    <AppLayout
      title="Results for:"
      highlight={`“${searchQuery}”`}
      bookmarks={searchResults}
      active="home"
      searchValue={searchQuery}
    />
  )
}

export default Search
