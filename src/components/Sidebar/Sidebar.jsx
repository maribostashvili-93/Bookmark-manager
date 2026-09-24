import Icon from '../Icon/Icon.jsx'
import Logo from '../Logo/Logo.jsx'
import Checkbox from '../Checkbox/Checkbox.jsx'
import './Sidebar.css'

const tags = ['React', 'JavaScript', 'CSS', 'Tools']

// Desktop: always visible column.
// Tablet / mobile (< 1024px): off-canvas drawer, shown when open=true.
// active: "home" | "archived" | null — highlighted nav item
// selectedTag: one active tag; an empty value represents the All option.
function Sidebar({ open = false, active = 'home', selectedTag = '', onClose, onNavigate, onTagChange }) {
  return (
    <aside className={`sidebar ${open ? 'sidebar--open' : ''}`}>
      <div className="sidebar__header">
        <Logo href="#" />
        <button type="button" className="sidebar__close" aria-label="Close menu" onClick={onClose}>
          <Icon name="x-close" />
        </button>
      </div>

      <nav className="sidebar__section">
        <ul className="nav-list">
          <li>
            <button
              type="button"
              className={`nav-item ${active === 'home' ? 'nav-item--active' : ''}`}
              aria-current={active === 'home' ? 'page' : undefined}
              onClick={() => { onNavigate?.('home'); onClose?.() }}
            >
              <Icon name="home" />
              <span className="nav-item__label text-preset-3">All Bookmarks</span>
            </button>
          </li>
          <li>
            <button
              type="button"
              className={`nav-item ${active === 'archived' ? 'nav-item--active' : ''}`}
              aria-current={active === 'archived' ? 'page' : undefined}
              onClick={() => { onNavigate?.('archived'); onClose?.() }}
            >
              <Icon name="archive" />
              <span className="nav-item__label text-preset-3">Archived</span>
            </button>
          </li>
        </ul>

        <div className="tags">
          <div className="tags__heading">
            <p className="tags__title">TAGS</p>
            {selectedTag && (
              <button type="button" className="tags__reset text-preset-5" onClick={() => onTagChange?.('')}>Reset</button>
            )}
          </div>
          <ul className="nav-list">
            <li>
              <label className="nav-item">
                <Checkbox
                  checked={!selectedTag}
                  onChange={() => onTagChange?.('')}
                />
                <span className="nav-item__label text-preset-3">All</span>
              </label>
            </li>
            {tags.map((tag) => (
              <li key={tag}>
                <label className="nav-item">
                  <Checkbox
                    checked={selectedTag === tag}
                    onChange={() => onTagChange?.(tag)}
                  />
                  <span className="nav-item__label text-preset-3">{tag}</span>
                </label>
              </li>
            ))}
          </ul>
        </div>

      </nav>
    </aside>
  )
}

export default Sidebar
