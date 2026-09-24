import Logo from '../../components/Logo/Logo.jsx'
import InputField from '../../components/InputField/InputField.jsx'
import Button from '../../components/Button/Button.jsx'
import AppearanceToggle from '../../components/AppearanceToggle/AppearanceToggle.jsx'
import '../Auth/Auth.css'

// values: pre-filled field values · errors: messages shown under invalid fields
// e.g. <SignUp values={{ email: 'name.gmail.com' }} errors={{ email: 'Enter a valid email address.' }} />
function SignUp({ values = {}, errors = {}, onNavigate }) {
  return (
    <main className="auth-page">
      <div className="auth-page__toolbar">
        <button type="button" className="auth-page__back text-preset-4" onClick={() => onNavigate?.('home')}>Back to bookmarks</button>
        <AppearanceToggle />
      </div>
      <div className="auth-card">
        <Logo />

        <div className="auth-card__header">
          <h1 className="auth-card__title text-preset-1">Create your account</h1>
          <p className="auth-card__subtitle text-preset-4-medium">
            Join us and start saving your favorite links — organized, searchable, and always within reach.
          </p>
        </div>

        <form className="auth-card__form" onSubmit={(event) => { event.preventDefault(); onNavigate?.('home') }}>
          <InputField
            id="signup-name"
            label="Full name"
            required
            autoComplete="name"
            defaultValue={values.name}
            error={Boolean(errors.name)}
            hint={errors.name}
          />
          <InputField
            id="signup-email"
            label="Email address"
            required
            type="email"
            autoComplete="email"
            defaultValue={values.email}
            error={Boolean(errors.email)}
            hint={errors.email}
          />
          <InputField
            id="signup-password"
            label="Password"
            required
            type="password"
            autoComplete="new-password"
            defaultValue={values.password}
            error={Boolean(errors.password)}
            hint={errors.password ?? 'Must be at least 8 characters long.'}
          />
          <Button hierarchy="primary" size="md" type="submit" className="btn--block">
            Create account
          </Button>
        </form>

        <div className="auth-card__footer">
          <p className="auth-card__row">
            <span className="text-preset-4-medium">Already have an account?</span>
            <button type="button" className="auth-card__link text-preset-4" onClick={() => onNavigate?.('signin')}>Log in</button>
          </p>
        </div>
      </div>
    </main>
  )
}

export default SignUp
