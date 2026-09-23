import { useState } from 'react'
import Sidebar from '../Sidebar/Sidebar.jsx'
import Header from '../Header/Header.jsx'
import BookmarkHeader from '../BookmarkHeader/BookmarkHeader.jsx'
import BookmarkList from '../BookmarkList/BookmarkList.jsx'
import BookmarkFormModal from '../Modal/BookmarkFormModal.jsx'
import { ModalOverlay } from '../Modal/Modal.jsx'
import './AppLayout.css'

// Shared shell for Home / Archived / Tagged / Search pages.
// The "open" props only switch what is visible — wire them to state later.
//   sidebarOpen   – tablet/mobile drawer + dark overlay
//   modal         – any modal element, shown centered over the page
//   toast         – a <Toast /> element
//   openMenuId    – id of the bookmark whose "⋮" menu is open
//   sortOpen      – "Sort by" menu
//   profileOpen   – profile menu under the avatar
//   searchValue   – text shown in the search field
function AppLayout({
  title,
  highlight,
  bookmarks,
  emptyMessage,
  active = 'home',
  selectedTags = [],
  sidebarOpen = false,
  modal,
  toast,
  openMenuId,
  sortOpen = false,
  profileOpen = false,
  searchValue,
  onAddBookmark,
  onNavigate,
  onToggleArchive,
  onTogglePin,
}) {
  const [activeMenuId, setActiveMenuId] = useState(null)
  const [isAddModalOpen, setIsAddModalOpen] = useState(false)
  const visibleMenuId = openMenuId ?? activeMenuId

  function handleMenuToggle(bookmarkId) {
    setActiveMenuId((currentId) => (currentId === bookmarkId ? null : bookmarkId))
  }

  function handleTogglePin(bookmarkId) {
    onTogglePin?.(bookmarkId)
    setActiveMenuId(null)
  }

  function handleToggleArchive(bookmarkId) {
    onToggleArchive?.(bookmarkId)
    setActiveMenuId(null)
  }

  function handleAddBookmark(bookmarkData) {
    onAddBookmark?.(bookmarkData)
    setIsAddModalOpen(false)
  }

  return (
    <div className="app">
      <Sidebar
        open={sidebarOpen}
        active={active}
        selectedTags={selectedTags}
        onNavigate={onNavigate}
      />
      {sidebarOpen && <div className="sidebar-overlay" />}

      <div className="app__content">
        <Header
          searchValue={searchValue}
          profileOpen={profileOpen}
          onAddBookmark={() => setIsAddModalOpen(true)}
        />

        <main className="main">
          <BookmarkHeader title={title} highlight={highlight} sortOpen={sortOpen} />

          <BookmarkList
            bookmarks={bookmarks}
            emptyMessage={emptyMessage}
            openMenuId={visibleMenuId}
            onToggleArchive={handleToggleArchive}
            onToggleMenu={handleMenuToggle}
            onTogglePin={handleTogglePin}
          />
        </main>
      </div>

      {modal && <ModalOverlay>{modal}</ModalOverlay>}
      {isAddModalOpen && (
        <ModalOverlay>
          <BookmarkFormModal
            onSubmit={handleAddBookmark}
            onCancel={() => setIsAddModalOpen(false)}
          />
        </ModalOverlay>
      )}
      {toast}
    </div>
  )
}

export default AppLayout
