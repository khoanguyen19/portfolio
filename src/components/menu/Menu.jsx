import './menu.scss'
import MenuItem from '../menuItem/MenuItem'
import Toggle from '../toggle/Toggle'

const Menu = ({ isOpen, setIsOpen }) => {
  const items = [
    {
      id: 'intro',
      title: 'Home'
    },
    {
      id: 'about',
      title: 'About me'
    },
    {
      id: 'list',
      title: 'Portfolio'
    },
    {
      id: 'contact',
      title: 'Contact'
    }
  ]
  return (
    <div className={"menu " + (isOpen && "active")}>
      <Toggle />
      <ul>
        {items.map(i => {
          return <MenuItem
            key={i.id}
            id={i.id}
            title={i.title}
            setIsOpen={setIsOpen}
          />
        })}
      </ul>
    </div>
  )
}

export default Menu