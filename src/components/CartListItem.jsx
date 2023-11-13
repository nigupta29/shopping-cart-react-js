import StockButton from './StockButton'

const CartListItem = ({ item }) => {
  const { id, title, img_src, price, stock, quantity } = item

  return (
    <li className="cart-list__item">
      <div className="cart-list__item-img">
        <img src={img_src} alt={title} />
      </div>
      <div className="cart-list__item-details">
        <h3 className="cart-list__item-title">{title}</h3>
        <p className="cart-list__item-price">${price}</p>
        <p className="cart-list__item-quantity">Quantity: {quantity}</p>
        <StockButton item={item} />
      </div>
    </li>
  )
}

export default CartListItem
