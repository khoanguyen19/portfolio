import './category.scss'
import { useDispatch, useSelector } from 'react-redux'
import { changeCategory, showEdit } from '../../reducers/filterReducer'
import { loadData, loadEdit } from '../../reducers/dataReducer'

const Category = ({ id, title, active }) => {

  const dispatch = useDispatch()
  const userId = useSelector(state => state.filters.ofEditStream.userId)
  
  const handleClick = (id) => {
    dispatch(changeCategory(id))
    if(id === 'editStream') {
      dispatch(showEdit(true))
      dispatch(loadEdit(userId))
    } else {
      dispatch(showEdit(false))
      dispatch(loadData(id))
    }
  }

  return (
    <li
      className={active ? 'list-category-item active' : 'list-category-item'}
      onClick={() => handleClick(id)}
    >
      {title}
    </li>
  )
}

export default Category