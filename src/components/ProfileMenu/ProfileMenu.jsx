import Avatar from '../Avatar/Avatar.jsx'
import { DropdownItem } from '../DropdownMenu/DropdownMenu.jsx'
import './ProfileMenu.css'

function ProfileMenu({ name = 'Demo User', email = 'demo@bookmark.app', onSignOut }) {
  return (
    <div className="profile-menu" role="menu">
      <div className="profile-menu__header">
        <Avatar asButton={false} />
        <div className="profile-menu__user">
          <p className="profile-menu__name text-preset-4">{name}</p>
          <p className="profile-menu__email text-preset-4-medium">{email}</p>
        </div>
      </div>

      <ul className="profile-menu__section profile-menu__footer">
        <DropdownItem leftIcon="logout" onClick={onSignOut}>Logout</DropdownItem>
      </ul>
    </div>
  )
}

export default ProfileMenu
