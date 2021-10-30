import './app.scss'
import { useState, useContext } from 'react'
import Intro from './components/intro/Intro'
import About from './components/about/About'
import ProductList from './components/productList/ProductList'
import Contact from './components/contact/Contact'
import Hamburger from './components/hamburger/Hamburger'
import Menu from './components/menu/Menu'
import { ThemeContext } from './context'

function App() {
  const [isOpen, setIsOpen] = useState(false)

  const theme = useContext(ThemeContext)
  const darkMode = theme.state.darkMode

  const style = {
    backgroundColor: darkMode ? "#121212" : "#ffffff",
    color: darkMode ? "rgba(255, 255, 255, 0.87)" : "#333"
  }

  return (
    <div className="app" style={style}>
      <Hamburger 
        isOpen={isOpen}
        setIsOpen={setIsOpen}
      />
      <Menu 
        isOpen={isOpen}
        setIsOpen={setIsOpen}
      />
      <Intro />
      <About />
      <ProductList />
      <Contact />
    </div>
  );
}

export default App;
