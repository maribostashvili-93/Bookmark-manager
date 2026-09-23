import Icon from '../Icon/Icon.jsx'
import Logo from '../Logo/Logo.jsx'
import Checkbox from '../Checkbox/Checkbox.jsx'
import './Sidebar.css'

const tags = [
  { name: 'AI', count: 1 },
  { name: 'Community', count: 5 },
  { name: 'Compatibility', count: 1 },
  { name: 'CSS', count: 6 },
  { name: 'Design', count: 1 },
  { name: 'Framework', count: 2 },
  { name: 'Git', count: 1 },
  { name: 'HTML', count: 2 },
  { name: 'JavaScript', count: 3 },
  { name: 'Layout', count: 3 },
  { name: 'Learning', count: 6 },
  { name: 'Performance', count: 2 },
  { name: 'Practice', count: 5 },
  { name: 'Reference', count: 4 },
  { name: 'Tips', count: 4 },
  { name: 'Tools', count: 4 },
  { name: 'Tutorial', count: 3 },
]

// Desktop: always visible column.
// Tablet / mobile (< 1024px): off-canvas drawer, shown when open=true.
// active: "home" | "archived" | null — highlighted nav item
// selectedTags: tag names shown as checked; shows "Reset" when not empty
function Sidebar({ open = false, active = 'home', selectedTags = [] }) {
  return (
    <aside className={`sidebar ${open ? 'sidebar--open' : ''}`}>
      <div className="sidebar__header">
        <Logo href="#" />
        <button type="button" className="sidebar__close" aria-label="Close menu">
          <Icon name="x-close" />
        </button>
      </div>

      <nav className="sidebar__section">
        <ul className="nav-list">
          <li>
            <a href="#" className={`nav-item ${active === 'home' ? 'nav-item--active' : ''}`}>
              <Icon name="home" />
              <span className="nav-item__label text-preset-3">Home</span>
            </a>
          </li>
          <li>
            <a href="#" className={`nav-item ${active === 'archived' ? 'nav-item--active' : ''}`}>
              <Icon name="archive" />
              <span className="nav-item__label text-preset-3">Archived</span>
            </a>
          </li>
        </ul>

        <div className="tags">
          <div className="tags__heading">
            <p className="tags__title">TAGS</p>
            {selectedTags.length > 0 && (
              <button type="button" className="tags__reset text-preset-5">Reset</button>
            )}
          </div>
          <ul className="nav-list">
            {tags.map((tag) => (
              <li key={tag.name}>
                <label className="nav-item">
                  <Checkbox defaultChecked={selectedTags.includes(tag.name)} />
                  <span className="nav-item__label text-preset-3">{tag.name}</span>
                  <span className="badge text-preset-5">{tag.count}</span>
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
