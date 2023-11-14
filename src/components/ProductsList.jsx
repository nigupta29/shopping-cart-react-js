import { useShop } from '../context/ShopContext'
import ProductsListItem from './ProductsListItem'

const ProductsList = () => {
  const { products } = useShop()

  return (
    <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
      {products.map((product) => (
        <ProductsListItem key={product.id} item={product} />
      ))}
    </ul>
  )
}

export default ProductsList
