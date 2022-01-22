import basketReducer from "./reducers/basketReducer";
import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { fetchProducts } from "./actions/productsActions";
import productsReducer from "./reducers/productsReducer";
import pathReducer from "./reducers/pathReducer";

const reducers = combineReducers({
  basket: basketReducer,
  products: productsReducer,
  path: pathReducer,
});

const store = createStore(reducers, applyMiddleware(thunk));
// store.subscribe(() => console.log(store.getState()));
store.dispatch(fetchProducts());

export default store;
