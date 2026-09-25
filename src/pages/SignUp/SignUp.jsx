import { useState } from 'react'
import Logo from '../../components/Logo/Logo.jsx'
import InputField from '../../components/InputField/InputField.jsx'
import Button from '../../components/Button/Button.jsx'
import AppearanceToggle from '../../components/AppearanceToggle/AppearanceToggle.jsx'
import '../Auth/Auth.css'
import { signUp } from '../../utils/authStorage.js'

// values: pre-filled field values · errors: messages shown under invalid fields
// e.g. <SignUp values={{ email: 'name.gmail.com' }} errors={{ email: 'Enter a valid email address.' }} />
function SignUp({ values = {}, errors = {}, onAuthenticated, onNavigate }) {
  const [authError, setAuthError] = useState('')

  function handleSubmit(event) {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    try {
      setAuthError('')
      onAuthenticated?.(signUp({
        name: formData.get('name'), email: formData.get('email'), password: formData.get('password'),
      }))
    } catch (error) {
      setAuthError(error.message)
    }
  }

  return (
    <main className="auth-page">
      <div className="auth-page__toolbar">
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

        <form className="auth-card__form" onSubmit={handleSubmit}>
          <InputField
            id="signup-name"
            name="name"
            label="Full name"
            required
            autoComplete="name"
            defaultValue={values.name}
            error={Boolean(errors.name)}
            hint={errors.name}
          />
          <InputField
            id="signup-email"
            name="email"
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
            name="password"
            label="Password"
            required
            type="password"
            autoComplete="new-password"
            defaultValue={values.password}
            error={Boolean(errors.password)}
            hint={errors.password ?? 'Must be at least 8 characters long.'}
          />
          {authError && <p className="auth-card__message auth-card__message--error text-preset-4-medium" role="alert">{authError}</p>}
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
