import { useState } from 'react'
import ModalVideo from 'react-modal-video'
import Video from '../../img/video.png'
import './product.scss'

const Product = ({ img, videoId }) => {
  const [isOpen, setOpen] = useState(false)

  const handleOnClick = (e) => {
    e.preventDefault()
    setOpen(!isOpen)
  }

  return (
    <div className="product">
      <div className="product-browser">
        <div className="product-circle"></div>
        <div className="product-circle"></div>
        <div className="product-circle"></div>
      </div>
      <div onClick={handleOnClick} className="product-pop">
        <img
          src={img}
          alt=""
        />
        <div className="product-pop-hover">
          <img src={Video} alt="" />
        </div>
      </div>
      <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId={videoId} onClose={() => setOpen(false)} />
    </div>
  )
}

export default Product