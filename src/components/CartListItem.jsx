import StockButton from './StockButton'
import Button from './Button'

const CartListItem = ({ item }) => {
  const { id, title, img_src, price, stock, quantity } = item

  return (
    <li className="cart-list__item">
      <img src={img_src} alt={title} />
      <div className="cart-list__item-details">
        <h3 className="cart-list__item-title">{title}</h3>
        <p className="cart-list__item-price">${price}</p>
        <p className="cart-list__item-quantity">Quantity: {quantity}</p>
      </div>
      <StockButton item={item} />
      <Button><svg
    xmlns="http://www.w3.org/2000/svg"
    xmlSpace="preserve"
    width={25}
    height={25}
    viewBox="0 0 512 512"

  >
    <path
      d="M334.885 98.803c-1.182 0-2.381-.142-3.579-.439-7.951-1.97-12.801-10.013-10.83-17.965l5.66-22.846-99.892-24.752-5.662 22.846c-1.97 7.951-10.021 12.801-17.965 10.83-7.951-1.97-12.801-10.014-10.83-17.965l9.229-37.244c1.97-7.952 10.02-12.8 17.965-10.83L347.67 32.325A14.83 14.83 0 0 1 358.5 50.29l-9.229 37.245c-1.674 6.753-7.729 11.268-14.386 11.268z"
      style={{
        fill: "#b3404a",
      }}
    />
    <path
      d="M177.957 497.166h-66.01l-26.411-343.58h92.421zM361.805 497.166h-66.01v-343.58h92.422z"
      style={{
        fill: "#f4b2b0",
      }}
    />
    <path
      d="M445.095 146.789 74.039 54.848c-7.945-1.971-15.995 2.876-17.965 10.83-1.971 7.952 2.878 15.995 10.83 17.965l222.414 55.11H85.535a14.835 14.835 0 0 0-14.79 15.971l26.412 343.581c.593 7.728 7.038 13.696 14.79 13.696h112.221c8.191 0 14.833-6.642 14.833-14.833 0-8.191-6.642-14.833-14.833-14.833h-31.377V168.419h88.169v328.747c0 8.191 6.642 14.833 14.833 14.833h66.01c7.752 0 14.196-5.967 14.79-13.696l25.491-331.609 35.874 8.89c1.199.297 2.397.439 3.579.439 6.657 0 12.712-4.515 14.385-11.269 1.975-7.952-2.874-15.995-10.827-17.965zm-343.543 21.63h61.573v313.914h-37.442l-24.131-313.914zm246.516 313.914h-37.439V168.419H372.2l-24.132 313.914z"
      style={{
        fill: "#b3404a",
      }}
    />
  </svg></Button>
    </li>
  )
}

export default CartListItem
