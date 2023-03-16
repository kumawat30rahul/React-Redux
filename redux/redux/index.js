const redux = require('redux');
const reduxLogger = require('redux-logger')

const applyMiddleWare = redux.applyMiddleware;
const createdStore = redux.legacy_createStore;
const combineReducers = redux.combineReducers;

const logger = reduxLogger.createLogger();

const BUY_CAKE = 'BUY_CAKE';
const BUY_ICECREAM = 'BUY_ICECREAM';

function buyCake(){
    return {
        type: BUY_CAKE
    }
}

function buyIceCream(){
    return {
        type: BUY_ICECREAM,
    }
}


const cakeInitialState = {
    numberOfCakes: 10
}
const iceCreamInitialState = {
    numberOfIceCream: 20
}
const cakeReducer = (state=cakeInitialState,action)=>{
    switch(action.type){
        case BUY_CAKE:
            return {
                ...state,
                numberOfCakes: state.numberOfCakes - 1
            }
            default:
                return state
    }
}

const iceCreamReducer = (state=iceCreamInitialState, action) => {
    switch(action.type){
        case BUY_ICECREAM:
            return{
                ...state,
                numberOfIceCream: state.numberOfIceCream - 1
            }
            default:
                return state
    }
}

const root = combineReducers({
    cake: cakeReducer,
    iceCream: iceCreamReducer,
})

const store = createdStore(root,applyMiddleWare(logger));
const unsubscribe = store.subscribe(() => {})
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyIceCream());
store.dispatch(buyIceCream());
unsubscribe();
