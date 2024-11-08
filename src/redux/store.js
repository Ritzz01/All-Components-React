import { legacy_createStore, combineReducers } from "redux";
import useCount from "./reducers/useCount";
import userDetail from "./reducers/userDetail";

const total = combineReducers({ useCount ,userDetail });

const store = legacy_createStore(total);

export default store;
