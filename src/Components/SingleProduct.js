import React, { useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { AppContext } from '../Context/ProductContext';
import Myimg from './Myimg';
import { TbTruckDelivery, TbReplace} from "react-icons/tb";
import Stars from './Stars';
import Addtocart from './Addtocart';


const API ="https://api.pujakaitem.com/api/products";

export default function SingleProduct() {
  const { getSingleProduct, isSingleLoading, singleProduct} = useContext(AppContext);
  const {id} = useParams();// The useParams hook returns an object of key/value pairs of the dynamic params from the current URL that were matched by the <Route path>
  const {id: aid,  
    name,
  company,
  price,
  description,
  stock,
  stars,
  reviews,
  image,
 
}  = singleProduct;

useEffect(() => {getSingleProduct(`${API}?id=${id}`) }, []); 


if(isSingleLoading){
return <div> .......Loading</div>
}
  return (

   <div className="grid1">
    <div className="proimg">
      <Myimg imgs={image}/>
    </div>

    <div className="prodata">
          <h2>{name}</h2>
          <Stars stars={stars} reviews={reviews}/> 
          
          <div className="price">
           MRP: {price}
          </div>
          <p>{description}</p>
          <div className="warranty">
             <div className="war1">
              <TbTruckDelivery className="icon1" />
              <p>Free Delivery</p>
             </div>
             <div className="war1">
              <TbReplace className="icon1" />
              <p>30 Days Replacement</p>
             </div>
             <div className="war1">
              <TbTruckDelivery className="icon1" />
              <p>Bettermart Delivery</p>
             </div>
          </div>
          <hr/>
          <div className="infoo">
            <p>Available: <span>{stock >0?"In Stock":"Not Available" }</span></p>
          </div>
          <p>
            ID: <span>{aid}</span>
          </p>
          <p>
            Brand: <span>{company}</span>
          </p>
          <hr />
          {stock > 0 && <Addtocart product={singleProduct}/>} 
         
    </div>
   </div>
  )
}
