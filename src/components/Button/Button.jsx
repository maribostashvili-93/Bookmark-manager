import Icon from '../Icon/Icon.jsx'
import './Button.css'

// hierarchy: primary | secondary
// size: sm | md
// variant: default | error (primary only)
// iconOnly: square 32px button, needs aria-label
function Button({
  children,
  hierarchy = 'primary',
  size = 'sm',
  variant = 'default',
  leftIcon,
  rightIcon,
  iconOnly = false,
  active = false,
  className = '',
  ...props
}) {
  const classes = [
    'btn',
    `btn--${hierarchy}`,
    `btn--${size}`,
    variant === 'error' && 'btn--error',
    iconOnly && 'btn--icon-only',
    active && 'btn--active',
    className,
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <button type="button" className={classes} {...props}>
      {leftIcon && <Icon name={leftIcon} />}
      {children && <span className="btn__text text-preset-3">{children}</span>}
      {rightIcon && <Icon name={rightIcon} />}
    </button>
  )
}

export default Button
