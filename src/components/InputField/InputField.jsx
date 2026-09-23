import Icon from '../Icon/Icon.jsx'
import './InputField.css'

function InputField({ id, label, required = false, hint, error = false, icon, className = '', ...props }) {
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
        <input id={id} className="field__input text-preset-4-medium" required={required} {...props} />
      </div>

      {hint && <p className="field__hint text-preset-4-medium">{hint}</p>}
    </div>
  )
}

export default InputField
