const redux = require('redux')
const creatingStore = redux.legacy_createStore;
const applyMiddleWare = redux.applyMiddleware;
const thunkMiddleWare = require('redux-thunk').default
const axios = require('axios')

const initialState = {
    loading: false,
    users: [],
    error: '',
}

const FETCH_REQUEST = 'FETCH_REQUEST'
const FETCH_SUCCESS = 'FETCH_SUCCESS'
const FETCH_FAIL = 'FETCH_FAIL'

const request = () => {
    return {
       type: FETCH_REQUEST,
    }
}

const success = (users) => {
    return {
       type: FETCH_SUCCESS,
       payload: users
    }
}
const fail = (error) => {
    return {
        type: FETCH_FAIL,
        payload: error
    }
}

const reducer = (state=initialState,action) => {
    switch(action.type){
        case FETCH_REQUEST:
            return{
                ...state,
                loading: true,
            }
        case FETCH_SUCCESS:
            return {
                loading:false ,
                users: action.payload,
                error: '',
            }

        case FETCH_FAIL:
            return{
                loading:false ,
                users: [],
                error: action.payload,
            }
            
    }
}

const fetchUser = () => {
    return function(dispatch){
        dispatch(request())
        axios.get("https://jsonplaceholder.typicode.com/users")
        .then(response => {
            const users = response.data.map(user => user.name)
            dispatch(success(users));
        })
        .catch(()=>{
            let error = 'sdfasdffsdfad';
            dispatch(fail(error))
        })
    }
}

const store = creatingStore(reducer, applyMiddleWare(thunkMiddleWare))

store.subscribe(()=>{console.log(store.getState())});
store.dispatch(fetchUser());