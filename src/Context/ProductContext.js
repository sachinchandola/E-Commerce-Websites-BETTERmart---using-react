// import { type } from "@testing-library/user-event/dist/type";
import axios from "axios";
import { createContext, useEffect, useReducer } from "react";
import  reducer  from "../reducer/productReducer";  

const AppContext = createContext();

const getLocalCartData = () =>{
    let localCartData = localStorage.getItem("BetterCart");
    if(localCartData === []){
        return [];
    }
    else{
        return JSON.parse(localCartData);
    }
};

const API ="https://api.pujakaitem.com/api/products";

const initialState = {
    isLoading: false,
    isError:false,
    products: [],
    all_products: [],
    filter_products: [],
    featureProducts: [],
    isSingleLoading: false,
    singleProduct: {},
    filters: {
        text: "",
        category: "all",
        company: "all",
        colors: "all", 
      },
    // cart: [],
    cart: getLocalCartData(),
    total_item: "",
    total_amount: "",
    shipping_fee: 50000,
};


// create provider
const AppProvider = ({children})=> {
    //reducer help to change state
    const [state, dispatch] = useReducer(reducer, initialState);


    const getProducts = async (url) =>{
        dispatch({type: "SET_LOADING"});
        try{
        const res =await axios.get(url);
        const products = await res.data;
        // kaam lagana
        dispatch({type: "SET_API_DATA", payload: products});
    } catch(error){
        dispatch({type: "API_ERROR"});
    }
    };



//secong api  call for  single product

const getSingleProduct = async (url) =>{
    dispatch({type: "SET_SINGLE_LOADING"});
    try{
    const res =await axios.get(url);
    const singleProduct = await res.data;
    dispatch({type: "SET_SINGLE_PRODUCT", payload: singleProduct});
} catch(error){
        dispatch({type: "SET_SINGLE_ERROR"});
}
}

    
// update the filter values
const updateFilterValue =(event) =>{
    let name = event.target.name;
    let value = event.target.value;
    
    return dispatch({type: "UPDATE_FILTERS_VALUE", payload: {name, value}})
    }



//to clear filters
const clearFilters = () =>{
  dispatch({type: "CLEAR_FILTERS"})
};

// add to cart
const addToCart = (id, colorr, temp, product) =>{
    dispatch({type: "ADD_TO_CART", payload:{id, colorr, temp, product}})
};

//remove cart
const removeItem = (id) => {
    dispatch({type:"REMOVE_ITEM", payload: id})
}

// to clear the cart
const clearCart = () =>{
    dispatch({type:"CLEAR_CART"})
}
 

//to add data in localstorage
useEffect(() =>{
    localStorage.setItem("BetterCart", JSON.stringify(state.cart))
},[state.cart]);


     useEffect(()=>{
        dispatch({type:"FILTER_PRODUCTS"})
     },[state.filters]);

    useEffect(()=>{getProducts(API)}, []);

    
            // returning data from our api
    return <AppContext.Provider value={{...state, getSingleProduct,  updateFilterValue, clearFilters, addToCart, removeItem, clearCart }}>{children}</AppContext.Provider>
};

export {AppProvider,AppContext};