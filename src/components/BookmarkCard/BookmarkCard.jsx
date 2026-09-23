import Icon from '../Icon/Icon.jsx'
import Button from '../Button/Button.jsx'
import BookmarkActionsMenu from '../Menus/BookmarkActionsMenu.jsx'
import '../DropdownMenu/DropdownMenu.css'
import './BookmarkCard.css'

// menuOpen=true shows the "⋮" actions menu under the button
function BookmarkCard({ bookmark, menuOpen = false, onDeleteBookmark, onEditBookmark, onToggleArchive, onToggleMenu, onTogglePin }) {
  const {
    logo,
    title,
    url,
    description,
    tags,
    views,
    lastVisited,
    createdAt,
    isPinned = false,
    isArchived = false,
  } = bookmark
  const displayedCreatedAt = createdAt?.includes('T')
    ? new Date(createdAt).toLocaleDateString('en-GB', {
        day: '2-digit',
        month: 'short',
      })
    : createdAt

  return (
    <article className={`card ${menuOpen ? 'card--menu-open' : ''}`}>
      <div className="card__body">
        <div className="card__header">
          <img className="card__logo" src={logo} alt="" />
          <div className="card__info">
            <h2 className="card__title text-preset-2">{title}</h2>
            <p className="card__url text-preset-5">{url}</p>
          </div>
          <div className="popover-anchor">
            <Button
              hierarchy="secondary"
              iconOnly
              leftIcon="dots-vertical"
              aria-label="More options"
              aria-expanded={menuOpen}
              onClick={() => onToggleMenu?.(bookmark.id)}
            />
            {menuOpen && (
              <div className="popover">
                <BookmarkActionsMenu
                  archived={isArchived}
                  pinned={isPinned}
                  onDelete={() => onDeleteBookmark?.(bookmark.id)}
                  onEdit={() => onEditBookmark?.(bookmark)}
                  onToggleArchive={() => onToggleArchive?.(bookmark.id)}
                  onTogglePin={() => onTogglePin?.(bookmark.id)}
                />
              </div>
            )}
          </div>
        </div>

        <hr className="card__divider" />

        <p className="card__description text-preset-4-medium">{description}</p>

        <ul className="card__tags">
          {tags.map((tag) => (
            <li key={tag} className="tag text-preset-5">{tag}</li>
          ))}
        </ul>
      </div>

      <footer className="card__footer">
        <div className="card__stats">
          <span className="card__meta text-preset-5">
            <Icon name="eye" size="sm" />
            {views}
          </span>
          <span className="card__meta text-preset-5">
            <Icon name="clock" size="sm" />
            {lastVisited}
          </span>
          <span className="card__meta text-preset-5">
            <Icon name="calendar" size="sm" />
            {displayedCreatedAt}
          </span>
        </div>
        {isPinned && <Icon name="pin" size="md" className="card__pin" />}
        {isArchived && <span className="card__badge text-preset-5">Archived</span>}
      </footer>
    </article>
  )
}

export default BookmarkCard
