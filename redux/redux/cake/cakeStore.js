import { legacy_createStore } from "redux";
import root from "./rootReducers";

const store = legacy_createStore(root)

export default store;