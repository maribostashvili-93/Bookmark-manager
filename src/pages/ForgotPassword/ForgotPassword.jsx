import Logo from '../../components/Logo/Logo.jsx'
import InputField from '../../components/InputField/InputField.jsx'
import Button from '../../components/Button/Button.jsx'
import AppearanceToggle from '../../components/AppearanceToggle/AppearanceToggle.jsx'
import '../Auth/Auth.css'

function ForgotPassword({ onNavigate }) {
  return (
    <main className="auth-page">
      <div className="auth-page__toolbar">
        <button type="button" className="auth-page__back text-preset-4" onClick={() => onNavigate?.('home')}>Back to bookmarks</button>
        <AppearanceToggle />
      </div>
      <div className="auth-card">
        <Logo />

        <div className="auth-card__header">
          <h1 className="auth-card__title text-preset-1">Forgot your password?</h1>
          <p className="auth-card__subtitle text-preset-4-medium">
            Enter your email address below and we’ll send you a link to reset your password.
          </p>
        </div>

        <form className="auth-card__form" onSubmit={(event) => event.preventDefault()}>
          <InputField id="forgot-email" label="Email" required type="email" autoComplete="email" />
          <Button hierarchy="primary" size="md" type="submit" className="btn--block">
            Send reset link
          </Button>
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
