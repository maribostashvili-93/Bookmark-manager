import BookmarkCard from '../BookmarkCard/BookmarkCard.jsx'

function BookmarkList({ bookmarks, openMenuId }) {
  return (
    <section className="bookmark-grid">
      {bookmarks.map((bookmark) => (
        <BookmarkCard
          key={bookmark.id}
          bookmark={bookmark}
          menuOpen={bookmark.id === openMenuId}
        />
      ))}
    </section>
  )
}

export default BookmarkList
