import { useShop } from '../context/ShopContext'
import Button from './Button'

const StockButton = ({ item }) => {
  const { dispatch } = useShop()
  const { stock } = item

  return (
    <div className="btn-group__stock">
      <Button
        type="secondary"
        handleClick={() =>
          dispatch({ type: 'REMOVE_FROM_CART', payload: item })
        }
      >{` - `}</Button>
      <p>{stock}</p>
      <Button
        type="primary"
        handleClick={() => dispatch({ type: 'ADD_TO_CART', payload: item })}
        disabled={stock === 0}
      >{` + `}</Button>
    </div>
  )
}

export default StockButton
