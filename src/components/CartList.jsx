import { useShop } from '../context/ShopContext'
import CartListItem from './CartListItem'

const CartList = () => {
  const { cart } = useShop()

  return (
    <ul className="cart-list">
      {cart.map((item) => (
        <CartListItem key={item.id} item={item} />
      ))}
    </ul>
  )
}

export default CartList
