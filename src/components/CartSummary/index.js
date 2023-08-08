// Write your code here
import CartContext from '../../context/CartContext'

import './index.css'

const CartSummary = () => (
  <CartContext.Consumer>
    {value => {
      const {cartList} = value
      let total = 0
      cartList.forEach(eachCartItem => {
        total += eachCartItem.price * eachCartItem.quantity
      })

      return (
        <div className="summary-con">
          <h1 className="summary-con-head">
            Order Total: <span className="summary-con-span">Rs {total}/-</span>
          </h1>
          <p className="summary-con-para">{cartList.length} items in cart</p>
          <button className="summary-con-button" type="button">
            CheckOut
          </button>
        </div>
      )
    }}
  </CartContext.Consumer>
)

export default CartSummary
