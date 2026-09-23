import BookmarkCard from '../BookmarkCard/BookmarkCard.jsx'
import EmptyData from '../EmptyData/EmptyData.jsx'

function BookmarkList({ bookmarks = [], openMenuId, onToggleMenu, onTogglePin }) {
  if (bookmarks.length === 0) {
    return <EmptyData />
  }

  return (
    <section className="bookmark-grid">
      {bookmarks.map((bookmark) => (
        <BookmarkCard
          key={bookmark.id}
          bookmark={bookmark}
          menuOpen={bookmark.id === openMenuId}
          onToggleMenu={onToggleMenu}
          onTogglePin={onTogglePin}
        />
      ))}
    </section>
  )
}

export default BookmarkList
