import { DropdownMenu, DropdownItem } from '../DropdownMenu/DropdownMenu.jsx'

// "Sort by" dropdown — the selected option shows a check icon
function SortMenu({ selected = 'Recently added' }) {
  const options = ['Recently added', 'Recently visited', 'Most visited']

  return (
    <DropdownMenu>
      {options.map((option) => (
        <DropdownItem key={option} rightIcon={option === selected ? 'check' : undefined}>
          {option}
        </DropdownItem>
      ))}
    </DropdownMenu>
  )
}

export default SortMenu
