import StockButton from './StockButton'

const CartListItem = ({ item }) => {
  const { id, title, img_src, price, stock, quantity } = item

  return (
    <li className="flex flex-wrap items-center justify-end lg:justify-between gap-5 border-b-2 border-info py-5 last:border-0 last:pb-0 first:pt-0 ">
      <img
        className="h-24 w-24 object-cover rounded-lg"
        src={img_src}
        alt={title}
      />
      <div className="flex-grow">
        <h3 className="font-bold text-lg">{title}</h3>
        <p className="text-secondary">${price}</p>
        <p className="text-info-content">Quantity: {quantity}</p>
      </div>
      <StockButton item={item} />
    </li>
  )
}

export default CartListItem
