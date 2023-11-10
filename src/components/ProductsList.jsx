import { useShop } from '../context/ShopContext'
import ProductsListItem from './ProductsListItem'

const ProductsList = () => {
  const { products } = useShop()

  return (
    <ul className="products">
      {products.map((product) => (
        <ProductsListItem key={product.id} item={product} />
      ))}
    </ul>
  )
}

export default ProductsList
