import { useState, useRef, useContext } from 'react'
import './contact.scss'
import Phone from '../../img/phone.png'
import Facebook from '../../img/facebook.png'
import Email from '../../img/email.png'
import Location from '../../img/location.png'
import Youtube from '../../img/youtube.png'
import emailjs from 'emailjs-com'
import { ThemeContext } from '../../context'

const Contact = () => {
  const formRef = useRef()

  const [isSent, setIsSent] = useState(false)
  const [name, setName] = useState('')
  const [subject, setSubject] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const theme = useContext(ThemeContext)
  const darkMode = theme.state.darkMode

  const style = {
    backgroundColor: darkMode ? "#333" : "#ffffff",
    color: darkMode ? "rgba(255, 255, 255, 0.87)" : "#333"
  }

  const handleChangeInput = (e) => {
    switch(e.target.name){
      case 'user_name':
        setName(e.target.value)
        break
      case 'user_subject':
        setSubject(e.target.value)
        break
      case 'user_email':
        setEmail(e.target.value)
        break
      case 'message':
        setMessage(e.target.value)
        break
      default:
    }
  }

  const handleReset = () => {
    setName('')
    setSubject('')
    setEmail('')
    setMessage('')
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    emailjs
      .sendForm('service_1649huc', 'template_0bf1abu', formRef.current, 'user_oKYJaG6ASjCWNom0rOcgO')
      .then((result) => {
          console.log(result.text)
          setIsSent(true)
          handleReset()
          setTimeout(() => {
            setIsSent(false)
          }, 3000)
      }, (error) => {
          console.log(error.text);
      });
  }

  return (
    <div className="contact" id="contact">
      <div className="contact-side"></div>
      <div className="contact-wrapper">
        <div className="left">
          <h2 className="left-title">Let's discuss your project</h2>
          <div className="left-info">
            <div className="left-info-item">
              <img src={Email} alt="" />
              abc_efd@gmail.com
            </div>
            <div className="left-info-item">
              <img src={Facebook} alt="" />
              Quy Nguyen
            </div>
            <div className="left-info-item">
              <img src={Youtube} alt="" />
              Quy Nguyen
            </div>
            <div className="left-info-item">
              <img src={Phone} alt="" />
              +12 3445 67 68
            </div>
            <div className="left-info-item">
              <img src={Location} alt="" />
              Danang, Vietnam
            </div>
          </div>
        </div>
        <div className="right">
          <p className="right-desc"><b>Get in touch. </b>Always available for freelancing if the right project comes along me. Don't worry and send me your information.</p>
          <form ref={formRef} onSubmit={handleSubmit} className="right-form">
            <input type="text" style={style} value={name} placeholder="Name" name="user_name" onChange={handleChangeInput}/>
            <input type="text" style={style} value={subject} placeholder="Subject" name="user_subject" onChange={handleChangeInput}/>
            <input type="text" style={style} value={email} placeholder="Email" name="user_email" onChange={handleChangeInput}/>
            <textarea rows="5" style={style} value={message} placeholder="Message" name="message" onChange={handleChangeInput}/>
            <button>Send</button>
            {isSent && <span>Thank you, I'll reply soon. Have a nice day!</span>}
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact