import { useState, useEffect } from 'react'
import './productList.scss'
import Product from '../product/Product'
import Category from '../category/Category'
import { 
  featuredProducts,
  highlightProducts,
  designProducts,
  motionProducts,
  animationProducts,
  categories
} from '../../data'

const ProductList = () => {
  const [selected, setSelected] = useState('featured')
  const [data, setData] = useState([])

  useEffect(() => {
    switch(selected) {
      case 'featured':
        setData(featuredProducts)
        break;
      case 'highlight':
        setData(highlightProducts)
        break;
      case '3d':
        setData(designProducts)
        break;
      case 'motion':
        setData(motionProducts)
        break;
      case 'animation':
        setData(animationProducts)
        break;
      default:
          setData(featuredProducts)
    }
  }, [selected])

  return (
    <div className="list" id="list">
      <div className="list-texts">
        <h2 className="list-title">Create & inspire. It's Quy Nguyen</h2>
      </div>
      <ul className="list-category">
        {categories.map(c => {
          const id = c.id
          return <Category
            key={id}
            id={id}
            title={c.title}
            active={selected === id && true}
            setActive={setSelected}
          />
        })}
      </ul>
      <div className="list-product">
        {data.map(d => {
          return <Product
            key={d.id}
            img={d.img}
            videoId={d.videoId}
          />
        })}
      </div>
    </div>
  )
}

export default ProductList