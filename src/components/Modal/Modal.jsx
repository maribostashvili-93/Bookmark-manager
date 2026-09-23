import Button from '../Button/Button.jsx'
import Icon from '../Icon/Icon.jsx'
import './Modal.css'

// size: lg (570px form modals) | sm (450px confirm modals)
// Wrap in <ModalOverlay> to show it over the page.
export function Modal({ title, description, size = 'lg', children, actions, onClose }) {
  return (
    <div className={`modal modal--${size}`} role="dialog" aria-modal="true" aria-label={title}>
      <div className="modal__header">
        <h2 className="modal__title text-preset-1">{title}</h2>
        {description && <p className="modal__description text-preset-4-medium">{description}</p>}
      </div>

      {children}

      {actions && <div className="modal__actions">{actions}</div>}

      {size === 'lg' ? (
        <Button hierarchy="secondary" iconOnly leftIcon="x-close" className="modal__close" aria-label="Close" onClick={onClose} />
      ) : (
        <button type="button" className="modal__close modal__close--plain" aria-label="Close" onClick={onClose}>
          <Icon name="close-small" />
        </button>
      )}
    </div>
  )
}

export function ModalOverlay({ children }) {
  return <div className="modal-overlay">{children}</div>
}
