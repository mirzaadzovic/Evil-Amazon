import basketReducer from "./reducers/basketReducer";
import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { fetchUsers } from "./actions/productsActions";
import productsReducer from "./reducers/productsReducer";

const reducers = combineReducers({
  basket: basketReducer,
  products: productsReducer,
});

const store = createStore(reducers, applyMiddleware(thunk));
store.subscribe(() => console.log(store.getState()));
store.dispatch(fetchUsers());

export default store;
