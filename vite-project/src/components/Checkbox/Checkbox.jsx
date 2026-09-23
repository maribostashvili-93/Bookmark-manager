import './Checkbox.css'

function Checkbox({ className = '', ...props }) {
  return <input type="checkbox" className={`checkbox ${className}`} {...props} />
}

export default Checkbox
