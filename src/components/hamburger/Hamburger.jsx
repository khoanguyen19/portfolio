import './hamburger.scss'

const Hamburger = ({ isOpen, setIsOpen }) => {

  return (
    <div
      className={"hamburger " + (isOpen && "active")}
      onClick={() => setIsOpen(!isOpen)}
    >
      <span></span>
      <span></span>
      <span></span>
    </div>
  )
}

export default Hamburger