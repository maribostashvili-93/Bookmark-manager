import Icon from '../Icon/Icon.jsx'
import './Toast.css'

const variants = {
  added: { icon: 'check', message: 'Bookmark added successfully.' },
  saved: { icon: 'check', message: 'Changes saved.' },
  copied: { icon: 'copy', message: 'Link copied to clipboard.' },
  pinned: { icon: 'pin', message: 'Bookmark pinned to top.' },
  archived: { icon: 'archive', message: 'Bookmark archived.' },
  restored: { icon: 'refresh', message: 'Bookmark restored.' },
  deleted: { icon: 'trash', message: 'Bookmark deleted.' },
}

// Top-right notification.
// variant: added | saved | copied | pinned | archived | restored | deleted
// inline: render in the normal flow instead of fixed top-right (for previews)
function Toast({ variant = 'added', inline = false }) {
  const { icon, message } = variants[variant]

  return (
    <div className={`toast ${inline ? 'toast--inline' : ''}`} role="status">
      <Icon name={icon} className="toast__icon" />
      <p className="toast__message text-preset-4-medium">{message}</p>
      <button type="button" className="toast__close" aria-label="Dismiss">
        <Icon name="x-close" size="md" />
      </button>
    </div>
  )
}

export default Toast
