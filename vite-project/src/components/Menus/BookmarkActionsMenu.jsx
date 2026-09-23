import { DropdownMenu, DropdownItem } from '../DropdownMenu/DropdownMenu.jsx'

// Card "⋮" menu. archived=true shows the Archived-page actions,
// pinned=true swaps "Pin" for "Unpin".
function BookmarkActionsMenu({ archived = false, pinned = false }) {
  return (
    <DropdownMenu>
      <DropdownItem leftIcon="link-external">Visit</DropdownItem>
      <DropdownItem leftIcon="copy">Copy URL</DropdownItem>
      {archived ? (
        <>
          <DropdownItem leftIcon="refresh">Unarchive</DropdownItem>
          <DropdownItem leftIcon="trash">Delete Permanently</DropdownItem>
        </>
      ) : (
        <>
          {pinned ? (
            <DropdownItem leftIcon="unpin">Unpin</DropdownItem>
          ) : (
            <DropdownItem leftIcon="pin">Pin</DropdownItem>
          )}
          <DropdownItem leftIcon="edit">Edit</DropdownItem>
          <DropdownItem leftIcon="archive">Archive</DropdownItem>
        </>
      )}
    </DropdownMenu>
  )
}

export default BookmarkActionsMenu
