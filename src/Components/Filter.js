import React, { useContext } from 'react'
// import { useFilterContext } from '../Context/FilterContext'
import { AppContext } from '../Context/ProductContext'

export default function Filter() {
    const {filters: { text, category, color }, all_products, updateFilterValue, clearFilters } = useContext(AppContext);
    //to get the unique data of each fields
    const getUniqueData = (data, property) => {
      let newVal = data.map((curElem) => {
        return curElem[property];
      });

       if(property ==="colors"){
        // return (newVal = ["ALL", ...new Set([].concat(...newVal))]);
        newVal = newVal.flat();
       }
       
      return (newVal = ["all", ...new Set(newVal)]);
    
  }
    
    // we need unique data
    const categoryOnlyData = getUniqueData(all_products, "category");
    const companyOnlyData = getUniqueData(all_products, "company");
    const colorsOnlyData = getUniqueData(all_products, "colors");

    return (
    <div>
    <form onSubmit={(e)=> e.preventDefault()}>
    <input type="text" name="text"  value={text} onChange={updateFilterValue} placeholder='search' />
    </form>
    <div className="category">
     <div> <h3>Category</h3></div>
      <div className='container'>
        {
        categoryOnlyData.map((curElem, index) => {
         return <div> <button key={index} type="button" name="category" value={curElem} onClick={updateFilterValue}>
          {curElem}
         </button>
         </div>
        })  
        }
      </div>
    </div>

    <div className="company">
      <h3>Company</h3>
      <form action="#">
        <select name="company" id="company" className='filcom' onClick={updateFilterValue}>
        {
          companyOnlyData.map((curElem, index) => {
            return(
              <option value={curElem} name="company">
               {curElem}
              </option>
            )
          })
        }
        </select>
      </form>
    </div>

     
    <div className="colors">
      <h3>Colors</h3>
      <div className="filcolor">
        {
          colorsOnlyData.map((curColor, index) =>{
            return (
              <button key={index} value={curColor} name="color" type="button" style={{backgroundColor: curColor}} className='btnclor' onClick={updateFilterValue}>
                
              </button>
            )
          })
        }
      </div>
    </div>


    <div className="pricef">
    <button type="button" class="btn btn-danger" onClick={clearFilters}>Clear Filters</button>
    </div>
    </div>
    
  )
}
