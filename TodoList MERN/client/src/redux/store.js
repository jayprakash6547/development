import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { tabReducer } from "./reducers/tabReducer";
import todosReducers from "./reducers/todosReducer";

const reducer = combineReducers({
  todos: todosReducers,
  currentTab: tabReducer,
});

const middleware = [thunk];

const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
