import Button from './Button'
import { useShop } from '../context/ShopContext'

const StockButton = ({ item }) => {
  const { dispatch } = useShop()

  return (
    <div className="btn-group__stock">
      <Button
        type="secondary"
        handleClick={() =>
          dispatch({ type: 'REMOVE_FROM_CART', payload: item })
        }
        disabled={item.stock === 0}
      >{` - `}</Button>
      <p>{item.stock}</p>
      <Button
        type="primary"
        handleClick={() => dispatch({ type: 'ADD_TO_CART', payload: item })}
        disabled={item.stock === 0}
      >{` + `}</Button>
    </div>
  )
}

export default StockButton
