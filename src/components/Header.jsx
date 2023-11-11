import { Link } from 'react-router-dom'
import Logo from './Logo'
import { useShop } from '../context/ShopContext'

const Header = () => {
  const { cart } = useShop()
  const cartItemCount = cart.reduce(
    (count, { quantity }) => count + quantity,
    0
  )

  return (
    <header className="header">
      <Logo />

      <input
        className="header__search"
        type="text"
        name="search"
        id="search"
        placeholder="Search for the products"
      />
      <Link to="cart">
        <span className="btn btn-lg btn-secondary">
          {`${cartItemCount} item${cartItemCount !== 1 ? 's' : ''}`}
        </span>
      </Link>
    </header>
  )
}

export default Header
