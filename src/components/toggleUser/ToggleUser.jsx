import './toggleUser.scss'
import { useDispatch } from 'react-redux'
import { changeUser } from '../../reducers/filterReducer'
import { loadEdit } from '../../reducers/dataReducer'

const ToggleUser = ({ id, img, channelImg, active }) => {
  const dispatch = useDispatch()

  const handleClick = (userId) => {
    dispatch(changeUser(userId))
    dispatch(loadEdit(userId))
  }

  return (
    <li 
      className={active ? "toggle-user active" : "toggle-user"}
      onClick={() => handleClick(id)}
    >
      <img className="toggle-user-avt" src={img} alt="" />
      <div className="toggle-user-channel">
        <img src={channelImg} alt="" />
      </div>
    </li>
  )
}

export default ToggleUser