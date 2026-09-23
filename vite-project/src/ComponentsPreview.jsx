import Button from './components/Button/Button.jsx'
import Checkbox from './components/Checkbox/Checkbox.jsx'
import InputField from './components/InputField/InputField.jsx'
import TextareaField from './components/TextareaField/TextareaField.jsx'
import AppearanceToggle from './components/AppearanceToggle/AppearanceToggle.jsx'
import Avatar from './components/Avatar/Avatar.jsx'
import SortMenu from './components/Menus/SortMenu.jsx'
import BookmarkActionsMenu from './components/Menus/BookmarkActionsMenu.jsx'
import ProfileMenu from './components/ProfileMenu/ProfileMenu.jsx'
import BookmarkFormModal from './components/Modal/BookmarkFormModal.jsx'
import ConfirmModal from './components/Modal/ConfirmModal.jsx'
import Toast from './components/Toast/Toast.jsx'
import { bookmarks } from './data/bookmarks.js'

// Static showcase of all components (render it from main.jsx to preview)
function ComponentsPreview() {
  const row = { display: 'flex', gap: 24, flexWrap: 'wrap', alignItems: 'flex-start' }

  return (
    <div style={{ display: 'grid', gap: 32, padding: 32 }}>
      <div style={row}>
        <Button leftIcon="plus" rightIcon="plus">Button CTA</Button>
        <Button size="md" leftIcon="plus" rightIcon="plus">Button CTA</Button>
        <Button size="md" variant="error" leftIcon="plus" rightIcon="plus">Button CTA</Button>
        <Button hierarchy="secondary" leftIcon="plus" rightIcon="plus">Button CTA</Button>
        <Button hierarchy="secondary" active leftIcon="plus" rightIcon="plus">Button CTA</Button>
        <Button hierarchy="secondary" iconOnly leftIcon="plus" aria-label="Add" />
        <Checkbox />
        <Checkbox defaultChecked />
        <AppearanceToggle />
        <Avatar />
        <Avatar open />
      </div>

      <div style={{ ...row, maxWidth: 700 }}>
        <div style={{ flex: 1 }}>
          <InputField id="demo-url" label="URL" required icon="search" placeholder="Search" hint="This is a hint text to help user." />
        </div>
        <div style={{ flex: 1 }}>
          <TextareaField id="demo-desc" label="URL" required placeholder="Search" hint="This is a hint text to help user." counter="0/280" />
        </div>
      </div>

      <div style={row}>
        <SortMenu />
        <BookmarkActionsMenu />
        <BookmarkActionsMenu pinned />
        <BookmarkActionsMenu archived />
        <ProfileMenu />
      </div>

      <div style={row}>
        <BookmarkFormModal />
        <BookmarkFormModal mode="edit" bookmark={bookmarks[0]} />
        <ConfirmModal variant="archive" />
        <ConfirmModal variant="unarchive" />
        <ConfirmModal variant="delete" />
      </div>

      <div style={{ display: 'grid', gap: 20 }}>
        {['added', 'saved', 'copied', 'pinned', 'archived', 'restored', 'deleted'].map((v) => (
          <Toast key={v} variant={v} inline />
        ))}
      </div>
    </div>
  )
}

export default ComponentsPreview
