import Avatar from '../Avatar/Avatar.jsx'
import AppearanceToggle from '../AppearanceToggle/AppearanceToggle.jsx'
import Icon from '../Icon/Icon.jsx'
import { DropdownItem } from '../DropdownMenu/DropdownMenu.jsx'
import './ProfileMenu.css'

function ProfileMenu({ name = 'Emily Carter', email = 'emily101@gmail.com' }) {
  return (
    <div className="profile-menu" role="menu">
      <div className="profile-menu__header">
        <Avatar asButton={false} />
        <div className="profile-menu__user">
          <p className="profile-menu__name text-preset-4">{name}</p>
          <p className="profile-menu__email text-preset-4-medium">{email}</p>
        </div>
      </div>

      <ul className="profile-menu__section">
        <li className="dropdown__item">
          <Icon name="palette" size="md" />
          <span className="dropdown__label text-preset-4">Theme</span>
          <AppearanceToggle />
        </li>
      </ul>

      <ul className="profile-menu__section profile-menu__footer">
        <DropdownItem leftIcon="logout">Logout</DropdownItem>
      </ul>
    </div>
  )
}

export default ProfileMenu
