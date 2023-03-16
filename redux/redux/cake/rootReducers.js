import { combineReducers } from "redux";
import reducer from "./cakeReducer";
import iceCreamReducer from "./icecreamReducer";

const root = combineReducers({
    cake: reducer,
    icecream: iceCreamReducer
})

export default root
