import React, {useContext} from 'react'
// import Product from './Product.js';
import { AppContext  } from "../Context/ProductContext.js";
import { Link } from 'react-router-dom';

// import { useFilterContext } from '../Context/FilterContext'
// import Gridview from './Gridview';

export default function Productlist() {
   const {filter_products} = useContext(AppContext)
  // const{ filter_products, setGridView} = useFilterContext();
 
    
    
    // if(setGridView){
    //   return <Gridview products={filter_products}/> ;
    // }
   return (
    //  if(setGridView  ){
    //   return <Listview products={filter_products}/>;
    // }
       <div className='row'>
      
  <div className="container col vv">
  {
    filter_products.map((curElem) =>{
                const {id, name,image, price,category,description}= curElem;
  return <Link to={`/singleproduct/${id}`}>
         <div className="card1">
         <div className="imgp">
          <figure>
            <img src={image} alt={name} height={200} width={230}/>
            <figcaption className='caption'>{category}</figcaption>
          </figure>
          </div>
          <div className="card-data1">
            <div className="card-data-flex">
              <h6>{name}</h6>
              <p className="card-data--price">₹ {price}</p>
              <p> {description.slice(0,90)}...</p>
            </div>
          </div>
         </div>
  </Link>
            })
        }   </div> </div>
 )
}



  
  

