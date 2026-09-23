import AppLayout from '../components/AppLayout/AppLayout.jsx'
import BookmarkFormModal from '../components/Modal/BookmarkFormModal.jsx'
import ConfirmModal from '../components/Modal/ConfirmModal.jsx'
import Toast from '../components/Toast/Toast.jsx'
import SignUp from './SignUp/SignUp.jsx'
import { bookmarks, archivedBookmarks } from '../data/bookmarks.js'

// Static versions of the Figma prototype screens (open menus, modals, drawer).
// Render one from App.jsx to preview it, e.g. `return <HomeWithAddModal />`.

const home = { title: 'All bookmarks', bookmarks, active: 'home' }
const archived = { title: 'Archived bookmarks', bookmarks: archivedBookmarks, active: 'archived' }

// Tablet / mobile — sidebar drawer open over the page
export const HomeWithSidebar = () => <AppLayout {...home} sidebarOpen />

// Home — modals
export const HomeWithAddModal = () => <AppLayout {...home} modal={<BookmarkFormModal />} />
export const HomeWithEditModal = () => (
  <AppLayout {...home} modal={<BookmarkFormModal mode="edit" bookmark={bookmarks[0]} />} />
)
export const HomeWithArchiveDialog = () => <AppLayout {...home} modal={<ConfirmModal variant="archive" />} />

// Home — open menus
export const HomeWithProfileMenu = () => <AppLayout {...home} profileOpen />
export const HomeWithActionsMenu = () => <AppLayout {...home} openMenuId={bookmarks[0].id} />
export const HomeWithSortMenu = () => <AppLayout {...home} sortOpen />
export const HomeWithToast = () => <AppLayout {...home} toast={<Toast />} />

// Archived — open menu and dialogs
export const ArchivedWithActionsMenu = () => <AppLayout {...archived} openMenuId={archivedBookmarks[0].id} />
export const ArchivedWithUnarchiveDialog = () => (
  <AppLayout {...archived} modal={<ConfirmModal variant="unarchive" />} />
)
export const ArchivedWithDeleteDialog = () => <AppLayout {...archived} modal={<ConfirmModal variant="delete" />} />

// Sign up — validation errors
export const SignUpWithErrors = () => (
  <SignUp
    values={{ email: 'name.gmail.com', password: '1234' }}
    errors={{ email: 'Enter a valid email address.', password: 'Must be at least 8 characters long.' }}
  />
)
