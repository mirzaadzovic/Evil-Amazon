import basketReducer from "./reducers/basketReducer";
import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { fetchProducts } from "./actions/productsActions";
import productsReducer from "./reducers/productsReducer";
import pathReducer from "./reducers/pathReducer";
import { fetchLoggedInUser } from "./actions/userActions";
import userReducer from "./reducers/userReducer";

const reducers = combineReducers({
  basket: basketReducer,
  products: productsReducer,
  path: pathReducer,
  user: userReducer,
});

const store = createStore(reducers, applyMiddleware(thunk));
// store.subscribe(() => console.log(store.getState()));

store.dispatch(fetchLoggedInUser());
store.dispatch(fetchProducts());

export default store;
