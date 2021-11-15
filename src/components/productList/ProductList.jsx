import './productList.scss'
import { useSelector } from 'react-redux'
import Product from '../product/Product'
import Category from '../category/Category'
import ToggleUser from '../toggleUser/ToggleUser'
import {
  categories,
  editStream
} from '../../data'

const ProductList = () => {

  const data = useSelector(state => state.data)
  const filters = useSelector(state => state.filters)

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
            active={filters.category === id && true}
          />
        })}
      </ul>

      {
        filters.ofEditStream.isShow &&
          <ul className="list-user">
            {editStream.map(e => {
              const id = e.id_user
              return <ToggleUser 
                key={id}
                id={id}
                img={e.userImg}
                channelImg={e.channelImg}
                active={filters.ofEditStream.userId === id && true}
              />
            })}
          </ul>
      }
      
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