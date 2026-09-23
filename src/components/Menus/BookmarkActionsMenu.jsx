import { DropdownMenu, DropdownItem } from '../DropdownMenu/DropdownMenu.jsx'

// Card "⋮" menu. archived=true shows the Archived-page actions,
// pinned=true swaps "Pin" for "Unpin".
function BookmarkActionsMenu({ archived = false, pinned = false, onToggleArchive, onTogglePin }) {
  return (
    <DropdownMenu>
      <DropdownItem leftIcon="link-external">Visit</DropdownItem>
      <DropdownItem leftIcon="copy">Copy URL</DropdownItem>
      {archived ? (
        <>
          <DropdownItem leftIcon="refresh" onClick={onToggleArchive}>Restore</DropdownItem>
          <DropdownItem leftIcon="trash">Delete Permanently</DropdownItem>
        </>
      ) : (
        <>
          {pinned ? (
            <DropdownItem leftIcon="unpin" onClick={onTogglePin}>Unpin</DropdownItem>
          ) : (
            <DropdownItem leftIcon="pin" onClick={onTogglePin}>Pin</DropdownItem>
          )}
          <DropdownItem leftIcon="edit">Edit</DropdownItem>
          <DropdownItem leftIcon="archive" onClick={onToggleArchive}>Archive</DropdownItem>
        </>
      )}
    </DropdownMenu>
  )
}

export default BookmarkActionsMenu
