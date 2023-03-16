import { BUY_ICECREAM } from "./icecreamConst";

const initialState = {
    numberoficecream: 20,
}

const iceCreamReducer = (state=initialState,action)=>{
    switch(action.type){
        case BUY_ICECREAM:
            return{
                ...state,
                numberoficecream: state.numberoficecream - 1,
            }

            default:
                return state
    }
}

export default iceCreamReducer;