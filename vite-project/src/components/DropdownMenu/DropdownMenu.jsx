import Icon from '../Icon/Icon.jsx'
import './DropdownMenu.css'

export function DropdownMenu({ children, className = '' }) {
  return (
    <ul className={`dropdown ${className}`} role="menu">
      {children}
    </ul>
  )
}

// leftIcon / rightIcon: Icon names, e.g. "link", "check"
// trailing: any extra element on the right (e.g. <AppearanceToggle />)
export function DropdownItem({ children, leftIcon, rightIcon, trailing }) {
  return (
    <li role="none">
      <button type="button" className="dropdown__item" role="menuitem">
        {leftIcon && <Icon name={leftIcon} size="md" />}
        <span className="dropdown__label text-preset-4">{children}</span>
        {rightIcon && <Icon name={rightIcon} size="md" />}
        {trailing}
      </button>
    </li>
  )
}
