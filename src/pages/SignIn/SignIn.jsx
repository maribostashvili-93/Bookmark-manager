import Logo from '../../components/Logo/Logo.jsx'
import InputField from '../../components/InputField/InputField.jsx'
import Button from '../../components/Button/Button.jsx'
import AppearanceToggle from '../../components/AppearanceToggle/AppearanceToggle.jsx'
import '../Auth/Auth.css'

function SignIn({ onNavigate }) {
  return (
    <main className="auth-page">
      <div className="auth-page__toolbar">
        <button type="button" className="auth-page__back text-preset-4" onClick={() => onNavigate?.('home')}>Back to bookmarks</button>
        <AppearanceToggle />
      </div>
      <div className="auth-card">
        <Logo />

        <div className="auth-card__header">
          <h1 className="auth-card__title text-preset-1">Log in to your account</h1>
          <p className="auth-card__subtitle text-preset-4-medium">Welcome back! Please enter your details.</p>
        </div>

        <form className="auth-card__form" onSubmit={(event) => { event.preventDefault(); onNavigate?.('home') }}>
          <InputField id="signin-email" label="Email" type="email" autoComplete="email" />
          <InputField id="signin-password" label="Password" type="password" autoComplete="current-password" />
          <Button hierarchy="primary" size="md" type="submit" className="btn--block">
            Log in
          </Button>
        </form>

        <div className="auth-card__footer">
          <p className="auth-card__row">
            <span className="text-preset-4-medium">Forgot password?</span>
            <button type="button" className="auth-card__link text-preset-4" onClick={() => onNavigate?.('forgot-password')}>Reset it</button>
          </p>
          <p className="auth-card__row">
            <span className="text-preset-4-medium">Don’t have an account?</span>
            <button type="button" className="auth-card__link text-preset-4" onClick={() => onNavigate?.('signup')}>Sign up</button>
          </p>
        </div>
      </div>
    </main>
  )
}

export default SignIn
