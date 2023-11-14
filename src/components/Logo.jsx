import { Link } from 'react-router-dom'

const Logo = () => {
  return (
    <Link to="/" className="link link-hover">
      <div className="flex items-center space-x-3 min-w-fit">
        <img className="w-10 h-10" src="/cart.svg" alt="Cart Log" />
        <h3 className="text-2xl font-bold">E-cart</h3>
      </div>
    </Link>
  )
}

export default Logo
