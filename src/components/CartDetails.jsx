import { useShop } from '../context/ShopContext'

const CartDetails = () => {
  const { cart, cartSubTotalAmount } = useShop()

  return (
    <aside className="lg:w-4/12 space-y-5">
      <ul className="bg-base-200 rounded-box p-10 text-sm space-y-3">
        <h3 className="text-xl text-primary mb-5 font-bold">Cart Summary</h3>
        {cart.map((item) => (
          <li key={item.key} className="flex flex-row justify-between">
            <p>{item.title}</p>
            <p>{`${item.quantity} x Rs.${item.price}`}</p>
          </li>
        ))}
        <li className="flex flex-row justify-between text-base-content font-bold my-5 border-t pt-2">
          <p>Subtotal</p>
          <p>{`Rs. ${Number(cartSubTotalAmount).toFixed(2)}`}</p>
        </li>
        <li className="flex flex-row justify-between text-base-content font-bold my-5">
          <p>Tax - 18%</p>
          <p>{`(+) Rs. ${Number(cartSubTotalAmount * 0.18).toFixed(2)}`}</p>
        </li>
        <li className="flex flex-row justify-between text-secondary font-bold my-5 border-t-2 pt-2">
          <p>Total</p>
          <p>{`Rs. ${Number(cartSubTotalAmount * 1.18).toFixed(2)} `}</p>
        </li>
      </ul>
    </aside>
  )
}

export default CartDetails
