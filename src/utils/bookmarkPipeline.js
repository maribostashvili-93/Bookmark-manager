export function filterByView(bookmarks, currentView) {
  return bookmarks.filter((bookmark) =>
    currentView === 'archived' ? bookmark.isArchived : !bookmark.isArchived,
  )
}

export function filterBySearch(bookmarks, searchTerm) {
  const normalizedSearchTerm = searchTerm.trim().toLowerCase()
  if (!normalizedSearchTerm) return bookmarks

  return bookmarks.filter((bookmark) =>
    bookmark.title.toLowerCase().includes(normalizedSearchTerm)
    || bookmark.description.toLowerCase().includes(normalizedSearchTerm),
  )
}

export function filterByTag(bookmarks, selectedTag) {
  if (!selectedTag) return bookmarks

  return bookmarks.filter((bookmark) =>
    bookmark.tags.some((tag) => tag.toLowerCase() === selectedTag.toLowerCase()),
  )
}

function getDateValue(value) {
  if (!value || value === 'Never') return 0
  const timestamp = Date.parse(value)
  return Number.isNaN(timestamp) ? 0 : timestamp
}

export function sortBookmarks(bookmarks, sortOption) {
  return [...bookmarks].sort((firstBookmark, secondBookmark) => {
    if (sortOption === 'Most visited') return secondBookmark.views - firstBookmark.views
    if (sortOption === 'Recently visited') {
      return getDateValue(secondBookmark.lastVisited) - getDateValue(firstBookmark.lastVisited)
    }
    return getDateValue(secondBookmark.createdAt) - getDateValue(firstBookmark.createdAt)
  })
}

export function movePinnedFirst(bookmarks) {
  return [...bookmarks].sort(
    (firstBookmark, secondBookmark) => Number(secondBookmark.isPinned) - Number(firstBookmark.isPinned),
  )
}

export function getVisibleBookmarks(bookmarks, options) {
  const viewBookmarks = filterByView(bookmarks, options.currentView)
  const searchedBookmarks = filterBySearch(viewBookmarks, options.searchTerm)
  const taggedBookmarks = filterByTag(searchedBookmarks, options.selectedTag)
  const sortedBookmarks = sortBookmarks(taggedBookmarks, options.sortOption)
  return movePinnedFirst(sortedBookmarks)
}
