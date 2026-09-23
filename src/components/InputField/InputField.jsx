import Icon from '../Icon/Icon.jsx'
import './InputField.css'

function InputField({ id, label, required = false, hint, error = false, icon, className = '', ...props }) {
  const hintId = hint ? `${id}-hint` : undefined

  return (
    <div className={`field ${error ? 'field--error' : ''} ${className}`}>
      {label && (
        <label htmlFor={id} className="field__label text-preset-4">
          {label}
          {required && <span className="field__required">*</span>}
        </label>
      )}

      <div className="field__control">
        {icon && <Icon name={icon} className="field__icon" />}
        <input
          id={id}
          className="field__input text-preset-4-medium"
          required={required}
          aria-invalid={error || undefined}
          aria-describedby={hintId}
          {...props}
        />
      </div>

      {hint && (
        <p id={hintId} className="field__hint text-preset-4-medium" role={error ? 'alert' : undefined}>
          {hint}
        </p>
      )}
    </div>
  )
}

export default InputField
