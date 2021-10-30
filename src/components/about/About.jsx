import './about.scss'
import monoMan from '../../img/man-mono.jpg'

const About = () => {
  
  return (
    <div className="about" id="about">
      <div className="left">
        <div className="left-card bg"></div>
        <div className="left-card">
          <img src={monoMan} alt="" className="left-img" />
        </div>
      </div>
      <div className="right">
        <div className="right-wrapper">
          <h2 className="right-title">About me</h2>
          <p className="right-sub">
            It is a long established fact that a reader will be distracted by the readable content.
          </p>
          <p className="right-desc">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
            minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat duis aute irure dolor in reprehende.
          </p>
        </div>
      </div>
    </div>
  )
}

export default About