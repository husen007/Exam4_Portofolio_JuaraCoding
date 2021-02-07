import { combineReducers, createStore } from "redux";
import { blog } from "../reducers/blog";

export const store = createStore(
  combineReducers({
    blog,
  })
);
