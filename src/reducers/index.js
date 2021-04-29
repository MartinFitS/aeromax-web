const reducer = (state,action)=>{
    switch(action.type){
        case "SEARCH_PRODUCT":
            return{
                ...state,
                productSearch: action.payload
            }
            default:
              return state;
    }
};

export default reducer;