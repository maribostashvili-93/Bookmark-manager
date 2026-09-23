import Icon from '../Icon/Icon.jsx'
import Avatar from '../Avatar/Avatar.jsx'
import ProfileMenu from '../ProfileMenu/ProfileMenu.jsx'
import '../DropdownMenu/DropdownMenu.css'
import '../Button/Button.css'
import './Header.css'

// searchValue: pre-filled search text · profileOpen: shows the profile menu
function Header({ searchValue = '', profileOpen = false, onAddBookmark, onSearchChange }) {
  return (
    <header className="header">
      <div className="header__start">
        {/* Opens the sidebar drawer — tablet / mobile only */}
        <button type="button" className="header__menu" aria-label="Open menu">
          <Icon name="menu" />
        </button>

        <label className="search">
          <Icon name="search" />
          <input
            type="search"
            className="search__input text-preset-4-medium"
            placeholder="Search by title..."
            value={searchValue}
            onChange={(event) => onSearchChange?.(event.target.value)}
          />
        </label>
      </div>

      <div className="header__actions">
        {/* Text is hidden on mobile, only the + icon stays */}
        <button type="button" className="btn btn--primary btn--md header__add" onClick={onAddBookmark}>
          <Icon name="plus" />
          <span className="btn__text text-preset-3">Add Bookmark</span>
        </button>
        <div className="popover-anchor">
          <Avatar open={profileOpen} />
          {profileOpen && (
            <div className="popover">
              <ProfileMenu />
            </div>
          )}
        </div>
      </div>
    </header>
  )
}

export default Header
