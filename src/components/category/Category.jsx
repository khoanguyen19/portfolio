import './category.scss'

const Category = ({ id, title, active, setActive }) => {
  return (
    <li className={active ? 'list-category-item active' : 'list-category-item'} onClick={() => setActive(id)}>{title}</li>
  )
}

export default Category