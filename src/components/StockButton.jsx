import { MinusSmallIcon, PlusSmallIcon } from '@heroicons/react/24/outline'
import { useShop } from '../context/ShopContext'

const StockButton = ({ item }) => {
  const { dispatch } = useShop()
  const { stock } = item

  return (
    <div className="join border border-2">
      <button
        className="btn btn-sm btn-secondary join-item"
        onClick={() => dispatch({ type: 'REMOVE_FROM_CART', payload: item })}
      >
        <MinusSmallIcon className="h-5" />
      </button>
      <p className="my-auto px-7">{stock}</p>
      <button
        className="btn btn-sm btn-primary join-item"
        onClick={() => dispatch({ type: 'ADD_TO_CART', payload: item })}
      >
        <PlusSmallIcon className="h-5" />
      </button>
    </div>
  )
}

export default StockButton
