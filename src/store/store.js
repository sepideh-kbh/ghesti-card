import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { usersList } from './users/slice';
import { productsList } from './products/slice';
import { createLogger } from "redux-logger";

let middleware = [];
const logger = createLogger();
  middleware = [
    ...getDefaultMiddleware({
      serializableCheck: false,
    }),
    logger
  ];

const reducers = combineReducers({
  usersList,
  productsList
});

const store = configureStore({
  reducer: reducers,
  middleware
});

export default store;