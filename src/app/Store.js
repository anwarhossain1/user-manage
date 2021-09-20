import { combineReducers, createStore } from "redux";
import { addUserReducer } from "./Reducers/addUserReducer";

const finalReducer = combineReducers({
  addUserReducer: addUserReducer,
});

const store = createStore(finalReducer);

export default store;
