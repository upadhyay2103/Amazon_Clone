export const initialState={
    basket:[],
    user:null,
};

const reducer=(state,action)=>{
    switch(action.type)
    {
        case 'ADD_TO_BASKET':
            return {
                ...state,
                basket:[...state.basket,action.item],
            }
        case 'REMOVE_FROM_BASKET':
            const index=state.basket.findIndex(
                (basketItem)=>basketItem.id===action.id
            );
            let newBasket=[...state.basket];
            if(index>=0)
            {
                newBasket.splice(index,1)
            }
            else{
                console.warn(`can't remove product ${action.id} is not in your basket`)
            }

            return {
                ...state,
                basket:newBasket
            }
        case 'SET_USER':
            return {
                ...state,
                user:action.user
            }
        default:
            return state;
    }
};

export default reducer;