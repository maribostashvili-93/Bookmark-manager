import Sidebar from '../Sidebar/Sidebar.jsx'
import Header from '../Header/Header.jsx'
import BookmarkHeader from '../BookmarkHeader/BookmarkHeader.jsx'
import BookmarkCard from '../BookmarkCard/BookmarkCard.jsx'
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
  active = 'home',
  selectedTags = [],
  sidebarOpen = false,
  modal,
  toast,
  openMenuId,
  sortOpen = false,
  profileOpen = false,
  searchValue,
}) {
  return (
    <div className="app">
      <Sidebar open={sidebarOpen} active={active} selectedTags={selectedTags} />
      {sidebarOpen && <div className="sidebar-overlay" />}

      <div className="app__content">
        <Header searchValue={searchValue} profileOpen={profileOpen} />

        <main className="main">
          <BookmarkHeader title={title} highlight={highlight} sortOpen={sortOpen} />

          <section className="bookmark-grid">
            {bookmarks.map((bookmark) => (
              <BookmarkCard
                key={bookmark.id}
                bookmark={bookmark}
                menuOpen={bookmark.id === openMenuId}
              />
            ))}
          </section>
        </main>
      </div>

      {modal && <ModalOverlay>{modal}</ModalOverlay>}
      {toast}
    </div>
  )
}

export default AppLayout
