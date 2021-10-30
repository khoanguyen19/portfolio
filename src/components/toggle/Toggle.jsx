import './toggle.scss'
import Sun  from '../../img/sun.png'
import Moon  from '../../img/moon.png'
import { useContext } from 'react'
import { ThemeContext } from '../../context'

const Toggle = () => {
  const theme = useContext(ThemeContext)

  const handleClick = () => {
    theme.dispatch({type: 'TOGGLE'})
  }

  const style = {
    transform: theme.state.darkMode ? 'translateX(-14px)' : 'translateX(14px)'
  }

  return (
    <div className="toggle">
      <img src={Sun} alt="" className="toggle-icon"/>
      <img src={Moon} alt="" className="toggle-icon"/>
      <div className="toggle-btn" style={style} onClick={handleClick}></div>
    </div>
  )
}

export default Toggle