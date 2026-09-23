import Logo from '../../components/Logo/Logo.jsx'
import InputField from '../../components/InputField/InputField.jsx'
import Button from '../../components/Button/Button.jsx'
import '../Auth/Auth.css'

function ForgotPassword() {
  return (
    <main className="auth-page">
      <div className="auth-card">
        <Logo />

        <div className="auth-card__header">
          <h1 className="auth-card__title text-preset-1">Forgot your password?</h1>
          <p className="auth-card__subtitle text-preset-4-medium">
            Enter your email address below and we’ll send you a link to reset your password.
          </p>
        </div>

        <form className="auth-card__form">
          <InputField id="forgot-email" label="Email" required type="email" autoComplete="email" />
          <Button hierarchy="primary" size="md" type="submit" className="btn--block">
            Send reset link
          </Button>
        </form>

        <div className="auth-card__footer">
          <p className="auth-card__row">
            <a href="#" className="auth-card__link text-preset-4">Back to login</a>
          </p>
        </div>
      </div>
    </main>
  )
}

export default ForgotPassword
