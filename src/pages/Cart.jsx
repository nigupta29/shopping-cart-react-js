import { Link } from 'react-router-dom'
import CartDetails from '../components/CartDetails'
import CartList from '../components/CartList'
import { useShop } from '../context/ShopContext'
import PageLayout from '../layouts/PageLayout'

const Cart = () => {
  const { cart } = useShop()

  return (
    <PageLayout title={'Cart Items'}>
      {cart.length === 0 ? (
        <div className="space-y-4">
          <p className="text-base-content">
            {`Looks like you haven't picked anything from our products. 😕`}
          </p>
          <p className="text-base-content">Have a look in our shop.</p>
          <Link to="/" className="btn btn-warning btn-outline">
            Back to Home 🏠
          </Link>
        </div>
      ) : (
        <section className="flex gap-10 flex-col lg:flex-row">
          <CartList />
          <CartDetails />
        </section>
      )}
    </PageLayout>
  )
}

export default Cart
