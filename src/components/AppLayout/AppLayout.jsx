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
  selectedTag = '',
  sidebarOpen = false,
  modal,
  toast,
  openMenuId,
  sortOpen = false,
  profileOpen = false,
  searchValue,
  onAddBookmark,
  onDeleteBookmark,
  onNavigate,
  onSearchChange,
  onTagChange,
  onToggleArchive,
  onTogglePin,
  onUpdateBookmark,
}) {
  const [activeMenuId, setActiveMenuId] = useState(null)
  const [isFormModalOpen, setIsFormModalOpen] = useState(false)
  const [editingBookmark, setEditingBookmark] = useState(null)
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

  function handleOpenAddForm() {
    setEditingBookmark(null)
    setIsFormModalOpen(true)
  }

  function handleOpenEditForm(bookmark) {
    setEditingBookmark(bookmark)
    setActiveMenuId(null)
    setIsFormModalOpen(true)
  }

  function handleCloseForm() {
    setIsFormModalOpen(false)
    setEditingBookmark(null)
  }

  function handleSubmitBookmark(bookmarkData) {
    if (editingBookmark) {
      onUpdateBookmark?.(editingBookmark.id, bookmarkData)
    } else {
      onAddBookmark?.(bookmarkData)
    }

    handleCloseForm()
  }

  function handleDeleteBookmark(bookmarkId) {
    onDeleteBookmark?.(bookmarkId)
    setActiveMenuId(null)
  }

  return (
    <div className="app">
      <Sidebar
        open={sidebarOpen}
        active={active}
        selectedTag={selectedTag || selectedTags[0] || ''}
        onNavigate={onNavigate}
        onTagChange={onTagChange}
      />
      {sidebarOpen && <div className="sidebar-overlay" />}

      <div className="app__content">
        <Header
          searchValue={searchValue}
          profileOpen={profileOpen}
          onAddBookmark={handleOpenAddForm}
          onSearchChange={onSearchChange}
        />

        <main className="main">
          <BookmarkHeader title={title} highlight={highlight} sortOpen={sortOpen} />

          <BookmarkList
            bookmarks={bookmarks}
            emptyMessage={emptyMessage}
            openMenuId={visibleMenuId}
            onDeleteBookmark={handleDeleteBookmark}
            onEditBookmark={handleOpenEditForm}
            onToggleArchive={handleToggleArchive}
            onToggleMenu={handleMenuToggle}
            onTogglePin={handleTogglePin}
          />
        </main>
      </div>

      {modal && <ModalOverlay>{modal}</ModalOverlay>}
      {isFormModalOpen && (
        <ModalOverlay>
          <BookmarkFormModal
            key={editingBookmark?.id ?? 'add-bookmark'}
            mode={editingBookmark ? 'edit' : 'add'}
            bookmark={editingBookmark ?? {}}
            onSubmit={handleSubmitBookmark}
            onCancel={handleCloseForm}
          />
        </ModalOverlay>
      )}
      {toast}
    </div>
  )
}

export default AppLayout
