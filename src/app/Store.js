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

const store = createStore(
  finalReducer,
  composeEnhancers(applyMiddleware(thunk))
);

export default store;
