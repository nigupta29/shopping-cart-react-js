import CartDetails from '../components/CartDetails'
import CartList from '../components/CartList'
import { useShop } from '../context/ShopContext'
import PageLayout from '../layouts/PageLayout'

const Cart = () => {
  const { cart } = useShop()

  return (
    <PageLayout title={'Cart Items'}>
      {cart.length === 0 ? (
        <p className="text-base-content">{`Looks like you haven't picked anything from out products. 😕`}</p>
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
