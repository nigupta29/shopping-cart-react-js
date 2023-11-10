import { Link } from 'react-router-dom'

const Logo = () => {
  return (
    <Link to="/">
      <div className="logo">
        <img src="/cart.svg" alt="Cart Log" />
        <p>E-cart</p>
      </div>
    </Link>
  )
}

export default Logo
