import { BUY_CAKE } from "./cakeConst";

const initialState = {
    numberofcakes: 10,
}


const reducer = (state=initialState,action) => {
    switch(action.type){
        case BUY_CAKE:
            return {
                ...state,
                numberofcakes: state.numberofcakes - 1,
            }
        default:
            return state
    }
}

export default reducer

