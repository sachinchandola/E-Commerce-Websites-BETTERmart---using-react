
const ProductReducer = (state, action) =>{
   
    switch (action.type){
        case "SET_LOADING":
            return{
                ...state,
                isLoading: true,
            };
        case "SET_API_DATA":
            const featureData = action.payload.filter((curElem)=>{
                return curElem.featured === true;
            })
                return{
                    ...state,
                    isLoading: false,
                    products: action.payload,
                    filter_products: action.payload,
                    featureProducts: featureData,
                    all_products: [ ...action.payload],
                };


       
        case "API_ERROR":
                    return{
                        ...state,
                        isLoading: false,
                        isError:true,
                    };


        case "SET_SINGLE_LOADING":
                           return{
                ...state,
                isSingleLoading: true,
            };

        case "SET_SINGLE_PRODUCT":
                                    return{
                     ...state,
                     isSingleLoading: false,
                     singleProduct: action.payload,
                                        
                                    };
        case "SET_SINGLE_ERROR":
                    return{
                       ...state,
                     isSingleLoading: false,
                     isError:true,
                                        };
                                        
      case "UPDATE_FILTERS_VALUE":

        const {name, value} = action.payload;
                    return {
                     ...state,
                     filters: {
                         ...state.filters,
                     [name]: value,
                           },
                   };
     case "FILTER_PRODUCTS":
         let {all_products} =state ;
        let tempFilterProduct = [...all_products];
        
        const {text, category, company, color} = state.filters;

        if(text){
            tempFilterProduct = tempFilterProduct.filter((curElem)=>{
            return curElem.name.toLowerCase().includes(text);
            });
        }

        if(category !== 'all'){
            tempFilterProduct = tempFilterProduct.filter((curElem)=> {
              return curElem.category === category;
            });
        }

        if(company !== "all"){
            tempFilterProduct = tempFilterProduct.filter((curElem)=> {
              return curElem.company.toLowerCase() === company.toLowerCase();
            });
        }
        
         if(color){
            tempFilterProduct = tempFilterProduct.filter((curElem)=> 
                 curElem.colors.includes(color)
              );
         }     

        return {
            ...state,
            filter_products: tempFilterProduct,
        };
  
        case "CLEAR_FILTERS":
            return {
                ...state,
                filters: {
                    ...state.filters,
                    text: "",
                  category: "all",
                  company: "all",
                   colors: "all", 
                }
            }
        case "ADD_TO_CART":
            let {id, colorr, temp, product}= action.payload;
            
            let cartProduct;

            cartProduct= {
                id: id + colorr,
                 name: product.name,
                colorr,
                temp,
                 image : product.image[0].url,
                 price: product.price,
               
            }

            return {
                ...state,
                cart: [...state.cart, cartProduct],
            }
        
        case "REMOVE_ITEM":
            let updatedCart = state.cart.filter((curItem) => curItem.id !== action.payload);

            return {
                 ...state,
                 cart: updatedCart,
            }

        case "CLEAR_CART":
            return{
                ...state,
                cart: [],
            };



        default:
            return state;
        
    }



    
 };

export default ProductReducer;