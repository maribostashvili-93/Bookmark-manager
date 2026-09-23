import Icon from '../Icon/Icon.jsx'
import './AppearanceToggle.css'

// The highlighted segment follows <html data-theme> via CSS.
function AppearanceToggle() {
  return (
    <div className="appearance-toggle" role="group" aria-label="Theme">
      <button type="button" className="appearance-toggle__option appearance-toggle__option--light" aria-label="Light theme">
        <Icon name="sun" size="toggle" />
      </button>
      <button type="button" className="appearance-toggle__option appearance-toggle__option--dark" aria-label="Dark theme">
        <Icon name="moon" size="toggle" />
      </button>
    </div>
  )
}

export default AppearanceToggle
