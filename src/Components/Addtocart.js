import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom';
import { AppContext  } from "../Context/ProductContext.js";
export default function Addtocart({product}) {
  const {addToCart} = useContext(AppContext);
  const [temp, settemp]= useState(1);
  const [colorr, setcolor]= useState("color not select");
  const{id, colors} = product;
  return (
    
      <div className="colors">
         <p className='ppp'>
          colors:
          {
            colors.map((cur, index) =>{   return <button key={index} style={{backgroundColor: cur }} className='btn btn-success btn-circle btn-xl' onClick={()=>{setcolor(cur)}}></button>

         }) 
          }
         </p>
         <div>
         <div className='plus'>
         <i class="fa fa-plus" id="plus" onClick={()=>{ settemp(temp + 1)}}></i>
         <div>{temp}</div>
         <i class="fa fa-minus" id="plus"  onClick={()=>{temp>1 ?settemp(temp - 1) : settemp(1)}}></i>
         </div>
         <Link to="/cart" onClick={() => addToCart(id, colorr, temp, product)}>
         <button type="button" class="btn btn-primary">ADD TO CART</button>
         </Link>
         </div>
      </div>
    
  )
}
