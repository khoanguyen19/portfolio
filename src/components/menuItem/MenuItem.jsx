import './menuItem.scss'

const MenuItem = ({ id, title, setIsOpen }) => {
  return (
    <li onClick={() => setIsOpen(false)}>
      <a href={`#${id}`}>{title}</a>
    </li>
  )
}

export default MenuItem