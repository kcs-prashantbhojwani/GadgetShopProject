import React from 'react'
import FormatPrice from "../helpers/FormatPrice"
import CartAmountToggle from './CartAmountToggle'
import { FaTrash } from 'react-icons/fa'
import { useCartContext } from '../context/cartContext'

const CartItems = ({product_id, product_name, image_url, color, discount_price, amount}) => {
    // console.log("modelImgae", discount_price)
    const {removeItem, setDecrement, setIncrement} = useCartContext();

  return (
    <div className='cart_heading grid grid-five-column'>
        <div className='cart-image--name'>
            <div>
                <figure>
                    <img src={image_url} alt={product_id}/>
                </figure>
            </div>
            <div className='color-div'>
                <p>{product_name}</p>
                <p>color:</p>
                <div className='color-style' style={{backgroundColor: color}}>
                </div>
            </div>
        </div>

        <div className='cart-hide'>
            <p>
                <FormatPrice price={discount_price}/>
            </p>
        </div>
        <CartAmountToggle
        amount={amount}
        setDecrease={() => setDecrement(product_id)}
        setIncrease={() => setIncrement(product_id)}
      />

      <div className='cart-hide'>
        <p><FormatPrice price={discount_price * amount}/></p>
      </div>

      <div>
        <FaTrash className='remove_icon' onClick={() => removeItem(product_id)}/>
      </div>
    </div>
  )
}

export default CartItems