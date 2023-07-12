import { createContext, useContext, useEffect, useReducer } from "react";
import {AppContext} from "./ProductContext";
import reducer from "../reducer/filterReducer";

const FilterContext = createContext();
const initialState ={
    filter_products: [],
    all_products: [],
    grid_view: true,
    filters: {
      text: "",
    },
};

export const FilterContextProvider = ({children}) => {

   const { products } = useContext(AppContext);

   const{state, dispatch} = useReducer(reducer, initialState);

   const setGridView = () =>{
  
        return dispatch({type: "SET_GRIDVIEW"});
    };
    
// update the filter values
const updateFilterValue =(event) =>{
let name = event.target.name;
let value = event.target.value;

return dispatch({type: "UPDATE_FILTERS_VALUE", payload: {name, value}})
}
      useEffect(()=>{
        // dispatch({type:"FILTER_PRODUCTS"})
        dispatch({type: "LOAD_FILTER_PRODUCTS", payload: products});
      },[products]);
    
    
    return (
    <FilterContext.Provider value={{...state, setGridView, updateFilterValue  }}>
        {children}
    </FilterContext.Provider>);
}

export const useFilterContext =()=>{
    return useContext(FilterContext);
};