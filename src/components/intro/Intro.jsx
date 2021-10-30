import './intro.scss'
import { useEffect, useRef } from 'react'
import { init } from 'ityped'
import Man from '../../img/man.png'

const Intro = () => {

  const textRef = useRef()

  useEffect(() => {
    init(
      textRef.current,
      { 
        showCursor: true,
        backDelay: 1000,
        strings: ['Video Editor', 'Content Creator'] 
      }
    )
  }, [])

  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="left-wrapper">
          <h2 className="left-greet"><span>Hello</span>, My name is</h2>
          <h2 className="left-name">Quy Nguyen</h2>
          <h3 className="left-title">Freelance <span ref={textRef}></span></h3>
          <p className="left-desc">
            I design and develop services for customers of all sizes,
            specializing in creating stylish, modern websites, web services and
            online stores.
          </p>
        </div>
        <svg
          width="75"
          height="75"
          viewBox="0 0 75 75"
          fill="none"
          stroke="#333"
          className="left-scroll"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="scroll">
            <path
              id="Vector"
              d="M40.5 15L34.5 9L28.5 15"
              strokeWidth="3"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              id="Vector_2"
              d="M28.5 24L34.5 30L40.5 24"
              strokeWidth="3"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <g id="Group">
              <path
                id="Vector_3"
                d="M9 37.5H60"
                strokeWidth="3"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </g>
            <path
              id="Vector_4"
              d="M34.5 27V9"
              strokeWidth="2.9895"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <g id="Group_2">
              <path
                id="Vector_5"
                d="M9 27C9 12.918 20.418 1.5 34.5 1.5C48.5859 1.5 60 12.918 60 27C60 29.8906 60 45.1094 60 48C60 62.082 48.5859 73.5 34.5 73.5C20.418 73.5 9 62.082 9 48C9 45.1094 9 29.8906 9 27Z"
                strokeWidth="3"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </g>
          </g>
        </svg>
      </div>
      <div className="right">
        <div className="right-bg"></div>
        <img src={Man} alt="man" className="right-img"/>
      </div>
    </div>
  )
}

export default Intro