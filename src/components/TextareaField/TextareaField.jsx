import '../InputField/InputField.css'
import './TextareaField.css'

function TextareaField({ id, label, required = false, hint, counter, error = false, className = '', ...props }) {
  return (
    <div className={`field ${error ? 'field--error' : ''} ${className}`}>
      {label && (
        <label htmlFor={id} className="field__label text-preset-4">
          {label}
          {required && <span className="field__required">*</span>}
        </label>
      )}

      <div className="field__control field__control--textarea">
        <textarea id={id} className="field__input field__textarea text-preset-4-medium" required={required} {...props} />
      </div>

      {(hint || counter) && (
        <div className="field__bottom">
          {hint && <p className="field__hint text-preset-4-medium">{hint}</p>}
          {counter && <span className="field__counter text-preset-5">{counter}</span>}
        </div>
      )}
    </div>
  )
}

export default TextareaField
