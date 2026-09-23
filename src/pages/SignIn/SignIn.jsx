import Logo from '../../components/Logo/Logo.jsx'
import InputField from '../../components/InputField/InputField.jsx'
import Button from '../../components/Button/Button.jsx'
import '../Auth/Auth.css'

function SignIn() {
  return (
    <main className="auth-page">
      <div className="auth-card">
        <Logo />

        <div className="auth-card__header">
          <h1 className="auth-card__title text-preset-1">Log in to your account</h1>
          <p className="auth-card__subtitle text-preset-4-medium">Welcome back! Please enter your details.</p>
        </div>

        <form className="auth-card__form">
          <InputField id="signin-email" label="Email" type="email" autoComplete="email" />
          <InputField id="signin-password" label="Password" type="password" autoComplete="current-password" />
          <Button hierarchy="primary" size="md" type="submit" className="btn--block">
            Log in
          </Button>
        </form>

        <div className="auth-card__footer">
          <p className="auth-card__row">
            <span className="text-preset-4-medium">Forgot password?</span>
            <a href="#" className="auth-card__link text-preset-4">Reset it</a>
          </p>
          <p className="auth-card__row">
            <span className="text-preset-4-medium">Don’t have an account?</span>
            <a href="#" className="auth-card__link text-preset-4">Sign up</a>
          </p>
        </div>
      </div>
    </main>
  )
}

export default SignIn
