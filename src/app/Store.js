import { combineReducers, createStore, applyMiddleware } from "redux";
import { addUserReducer } from "./Reducers/addUserReducer";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
const finalReducer = combineReducers({
  addUserReducer: addUserReducer,
});
const composeEnhancers = composeWithDevTools({
  // Specify here name, actionsBlacklist, actionsCreators and other options
});

const usersFromStorage = localStorage.getItem("Users")
  ? JSON.parse(localStorage.getItem("Users"))
  : [];
console.log(usersFromStorage);
const initialState = {
  addUserReducer: {
    users: usersFromStorage,
  },
};

const store = createStore(
  finalReducer,
  initialState,
  composeEnhancers(applyMiddleware(thunk))
);

export default store;
