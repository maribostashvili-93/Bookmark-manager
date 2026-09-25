import { useState } from 'react'
import Logo from '../../components/Logo/Logo.jsx'
import InputField from '../../components/InputField/InputField.jsx'
import Button from '../../components/Button/Button.jsx'
import AppearanceToggle from '../../components/AppearanceToggle/AppearanceToggle.jsx'
import { resetPassword } from '../../utils/authStorage.js'
import '../Auth/Auth.css'

function ForgotPassword({ onNavigate }) {
  const [message, setMessage] = useState('')
  const [isError, setIsError] = useState(false)

  function handleSubmit(event) {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    const password = formData.get('password')

    if (password !== formData.get('confirmPassword')) {
      setIsError(true)
      setMessage('Passwords do not match.')
      return
    }

    try {
      resetPassword({ email: formData.get('email'), password })
      setIsError(false)
      setMessage('Password updated. You can now log in.')
      event.currentTarget.reset()
    } catch (error) {
      setIsError(true)
      setMessage(error.message)
    }
  }

  return (
    <main className="auth-page">
      <div className="auth-page__toolbar"><AppearanceToggle /></div>
      <div className="auth-card">
        <Logo />
        <div className="auth-card__header">
          <h1 className="auth-card__title text-preset-1">Forgot your password?</h1>
          <p className="auth-card__subtitle text-preset-4-medium">Enter your email address and choose a new password.</p>
        </div>
        <form className="auth-card__form" onSubmit={handleSubmit}>
          <InputField id="forgot-email" name="email" label="Email" required type="email" autoComplete="email" />
          <InputField id="forgot-password" name="password" label="New password" required minLength="8" type="password" autoComplete="new-password" hint="Must be at least 8 characters long." />
          <InputField id="forgot-password-confirm" name="confirmPassword" label="Confirm password" required minLength="8" type="password" autoComplete="new-password" />
          {message && <p className={`auth-card__message ${isError ? 'auth-card__message--error' : 'auth-card__message--success'} text-preset-4-medium`} role="status">{message}</p>}
          <Button hierarchy="primary" size="md" type="submit" className="btn--block">Reset password</Button>
        </form>
        <div className="auth-card__footer">
          <p className="auth-card__row">
            <button type="button" className="auth-card__link text-preset-4" onClick={() => onNavigate?.('signin')}>Back to login</button>
          </p>
        </div>
      </div>
    </main>
  )
}

export default ForgotPassword
