import BookmarkCard from '../BookmarkCard/BookmarkCard.jsx'
import EmptyData from '../EmptyData/EmptyData.jsx'

function BookmarkList({ bookmarks = [], emptyMessage, openMenuId, onDeleteBookmark, onEditBookmark, onToggleArchive, onToggleMenu, onTogglePin }) {
  if (bookmarks.length === 0) {
    return <EmptyData message={emptyMessage} />
  }

  return (
    <section className="bookmark-grid">
      {bookmarks.map((bookmark) => (
        <BookmarkCard
          key={bookmark.id}
          bookmark={bookmark}
          menuOpen={bookmark.id === openMenuId}
          onDeleteBookmark={onDeleteBookmark}
          onEditBookmark={onEditBookmark}
          onToggleArchive={onToggleArchive}
          onToggleMenu={onToggleMenu}
          onTogglePin={onTogglePin}
        />
      ))}
    </section>
  )
}

export default BookmarkList
