import Button from '../Button/Button.jsx'
import SortMenu from '../Menus/SortMenu.jsx'
import '../DropdownMenu/DropdownMenu.css'
import './BookmarkHeader.css'

// title: page heading, e.g. "All bookmarks" / "Archived bookmarks"
// highlight: optional teal part after the title, e.g. selected tags "Practice, CSS"
// sortOpen: shows the "Sort by" menu
function BookmarkHeader({ title = 'All bookmarks', highlight, sortOpen = false, sortOption, onSortChange, onToggleSort }) {
  return (
    <div className="bookmark-header">
      <h1 className="bookmark-header__title">
        {title}
        {highlight && <span className="bookmark-header__highlight"> {highlight}</span>}
      </h1>
      <div className="popover-anchor">
        <Button hierarchy="secondary" size="sm" leftIcon="sort" aria-expanded={sortOpen} onClick={onToggleSort}>
          Sort by
        </Button>
        {sortOpen && (
          <div className="popover">
            <SortMenu selected={sortOption} onSelect={onSortChange} />
          </div>
        )}
      </div>
    </div>
  )
}

export default BookmarkHeader
