import Icon from '../Icon/Icon.jsx'
import useTheme from '../../hooks/useTheme.js'
import './AppearanceToggle.css'

// The highlighted segment follows <html data-theme> via CSS.
function AppearanceToggle() {
  const { theme, setTheme } = useTheme()

  return (
    <div className="appearance-toggle" role="group" aria-label="Theme">
      <button type="button" className="appearance-toggle__option appearance-toggle__option--light" aria-label="Light theme" aria-pressed={theme === 'light'} onClick={() => setTheme('light')}>
        <Icon name="sun" size="toggle" />
      </button>
      <button type="button" className="appearance-toggle__option appearance-toggle__option--dark" aria-label="Dark theme" aria-pressed={theme === 'dark'} onClick={() => setTheme('dark')}>
        <Icon name="moon" size="toggle" />
      </button>
    </div>
  )
}

export default AppearanceToggle
