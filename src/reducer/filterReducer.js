const filterReducer = (state, action) =>{
switch(action.type){
    case "LOAD_FILTER_PRODUCTS":
        return {
            ...state,
            filter_products: [...action.payload],
            all_products: [...action.payload],
        };
    
    case "SET_GRIDVIEW":
        return{
            ...state,
            grid_view: true,
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
                             

    default: return state;
}
};

export default filterReducer;