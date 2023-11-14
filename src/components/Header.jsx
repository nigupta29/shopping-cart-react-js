import { ShoppingCartIcon } from '@heroicons/react/24/outline'
import { Link } from 'react-router-dom'
import { useShop } from '../context/ShopContext'
import Logo from './Logo'

const Header = () => {
  const { cartItemCount, cartTotalAmount } = useShop()

  return (
    <header className="navbar bg-base-100 space-x-10 p-5 justify-between sticky top-0 z-10">
      <Logo />
      <input
        type="text"
        placeholder="Search for the product..."
        name="search"
        id="search"
        className="input input-bordered input-primary flex-grow hidden order md:block"
      />
      <div className="dropdown dropdown-end">
        <label tabIndex={0} className="btn btn-ghost btn-circle">
          <div className="indicator">
            <ShoppingCartIcon className="h-7 w-7" />
            <span className="badge indicator-item">{cartItemCount}</span>
          </div>
        </label>
        <div
          tabIndex={0}
          className="mt-3 z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow-xl"
        >
          <div className="card-body">
            <span className="font-bold text-lg">{`${cartItemCount} Item${
              cartItemCount !== 1 ? 's' : ''
            }`}</span>
            <span className="text-info">{`Subtotal : Rs.${cartTotalAmount}`}</span>
            <div className="card-actions">
              <Link to="cart">
                <span className="btn btn-sm btn-warning">Go to Cart</span>
              </Link>{' '}
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
