import React from 'react'
import "./Css/Cart.css"
import { useStateValue } from "./StateProvider";
import {getbaskettotal} from "./Reducer"
// import CurrencyFormat from "react-currency-format"

function Subtotal() {
  const [{basket}]=useStateValue();

var value = getbaskettotal(basket);
console.log(value);



  return (
    

    
    <div className="subtotal"  >
    <div className="cartcolumn">
    <p >Subtotal ({basket?.length} items) : &#x20b9;{parseInt(value)}</p>
    <div>
    <button className='cart_checkout'>Proceed to checkout</button>
    </div>
    </div>
    
</div> 

    
   
  )

}

export default Subtotal