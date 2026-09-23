import logoIcon from '../../assets/icons/logo.svg'
import './Logo.css'

// Renders as a link when href is given, otherwise as plain content
function Logo({ href }) {
  const Tag = href ? 'a' : 'div'

  return (
    <Tag href={href} className="logo">
      <span className="logo__icon">
        <img src={logoIcon} alt="" />
      </span>
      <span className="logo__text">Bookmark Manager</span>
    </Tag>
  )
}

export default Logo
