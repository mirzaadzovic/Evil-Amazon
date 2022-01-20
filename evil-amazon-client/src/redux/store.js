import basketReducer from "./reducers/basketReducer";
import { createStore, combineReducers } from "redux";

const reducers = combineReducers({
  basket: basketReducer,
});

export default createStore(reducers);
