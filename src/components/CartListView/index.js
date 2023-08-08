import CartItem from '../CartItem'
import CartContext from '../../context/CartContext'
import CartSummary from '../CartSummary'
import './index.css'

const CartListView = () => (
  <CartContext.Consumer>
    {value => {
      const {cartList} = value

      return (
        <div className="cart-list-con">
          <ul className="cart-list">
            {cartList.map(eachCartItem => (
              <CartItem key={eachCartItem.id} cartItemDetails={eachCartItem} />
            ))}
          </ul>

          <CartSummary />
        </div>
      )
    }}
  </CartContext.Consumer>
)

export default CartListView
