import React from 'react'
import "./Css/Cart.css"
import Subtotal from './Subtotal'

import {useStateValue} from "./StateProvider"
function Cart() {

  const [{basket},dispatch]=useStateValue();
  const Removefrombasket = (id)=>{
dispatch({
  type:"REMOVE_FROM_BASKET",
  id:id
})
  }


  return (
  
    <>
 
    <div className='cart_column'>
<div className='cart_items'>
{basket.map((e) => (
          <div key={e.id} className='cart_product'>
          <div  className="cart_image">
          <img src={e.image} alt="" />
          </div>
          <p>Price: &#x20b9;{e.price} </p>
          <button className="remove_cart" onClick={()=>{Removefrombasket(e.id)}}>Remove from Cart</button>
      </div>

        ))}

</div>
<Subtotal/>

    </div>
    </>
  )
}

export default Cart