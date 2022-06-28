import React from "react";
import "./Css/Store.css";
import projects from "./Data.jsx";
import { useStateValue } from "./StateProvider";
function Store() {


  const [{basket}, dispatch]=useStateValue();

console.log('this is the basket ',basket);
const addToBasket= (photo,money,text,id)=>{

  dispatch ({
     type:'ADD_TO_BASKET',
     item:{
        id:id,
        image:photo,
        price:money,
        describe:text
     }
  })

}

  document.title = "Store";

  return (

    
    <>
      <div className="store">
        {projects.map((e) => (
          
          <div key={e.distinct} className="image">
            <div className="photo">
              <div className="store_image">
              <img  src={e.photo}   alt="" />
              </div>
            </div>
            <p>{e.text}</p>
            <p className="price" onClick={()=>{addToBasket(e.photo,e.price,e.text,e.distinct)}}>&#x20b9;{e.price}</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default Store;
