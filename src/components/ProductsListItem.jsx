import { StarIcon } from '@heroicons/react/24/solid'
import StockButton from './StockButton'

const ProductsListItem = ({ item }) => {
  const { id, title, description, img_src, price, rating } = item

  return (
    <li className="card bg-base-100 shadow-lg hover:shadow-2xl">
      <figure>
        <img src={img_src} alt={''} />
      </figure>
      <div className="card-body">
        <h3 className="card-title">{title}</h3>
        <small>{description}</small>

        <p className="flex space-x-2 items-center">
          {Array.from({ length: rating }).map((_, index) => (
            <StarIcon className="h-6 text-warning" key={`${id}_${index}`} />
          ))}
        </p>
        <div className="flex justify-between items-center">
          <p className="products-item__price">{`Rs. ${price}`}</p>
          <StockButton item={item} />
        </div>
      </div>
    </li>
  )
}

export default ProductsListItem
