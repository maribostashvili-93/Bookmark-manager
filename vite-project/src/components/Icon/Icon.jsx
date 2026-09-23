import './Icon.css'

// Renders an exported Figma icon as a CSS mask, so it takes the current text color.
// name: home | archive | search | plus | sort | dots-vertical | eye | clock | calendar | link | check | sun | moon
//       x-close | close-small | palette | logout | link-external | copy | pin | edit | refresh | trash | unpin | menu
// size: sm (12px) | md (16px) | lg (20px, default) | toggle (14px)
function Icon({ name, size = 'lg', className = '' }) {
  return <span className={`icon icon--${name} icon--${size} ${className}`} aria-hidden="true" />
}

export default Icon
