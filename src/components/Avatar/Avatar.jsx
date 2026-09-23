import avatarImg from '../../assets/images/avatar.png'
import './Avatar.css'

// open=true shows the focus ring used while the profile menu is open
function Avatar({ open = false, asButton = true }) {
  const img = <img className="avatar__img" src={avatarImg} alt="" />

  if (!asButton) return <span className="avatar">{img}</span>

  return (
    <button
      type="button"
      className={`avatar ${open ? 'avatar--open' : ''}`}
      aria-label="Open profile menu"
      aria-expanded={open}
    >
      {img}
    </button>
  )
}

export default Avatar
