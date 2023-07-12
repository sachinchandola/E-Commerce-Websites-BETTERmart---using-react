import React, { useContext } from 'react'
import { FaTrash } from "react-icons/fa"
import { AppContext } from '../Context/ProductContext'


export default function CartItem({id, name, image, colorr, price, temp}) {
    const {removeItem} = useContext(AppContext);
  return (
    <div className="cart_head head grid grid-five-column">
      <div className="cart-image">
        <img src={image} alt="" height={50} width={50} className="immgg" />
        <div className="name-color">
         <p>{name}</p>
        <div className="name-colorr">
            
            <div style={{ backgroundColor: colorr, colorr: colorr}}></div>
        </div>
        </div>
      </div>

      <div className='cartp'>
        <p>{price}</p>
      </div>

      <div className='cartt'>
        {temp}
      </div>

      <div className='carttp'>
        {temp*price}
      </div>

      <div className='cartf'>
        <FaTrash onClick={() => removeItem(id)}/>
      </div>
    </div>
  )
}
