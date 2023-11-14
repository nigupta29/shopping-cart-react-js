import { useShop } from '../context/ShopContext'
import CartListItem from './CartListItem'

const CartList = () => {
  const { cart } = useShop()

  return (
    <ul className="flex-grow">
      {cart.map((item) => (
        <CartListItem key={item.id} item={item} />
      ))}
    </ul>
  )
}

export default CartList
