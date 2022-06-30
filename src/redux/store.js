import { createStore, applyMiddleware } from "redux";
import { rootReducer } from "./reducer/reducer";
import logger from "redux-logger";

export const store = createStore(rootReducer, applyMiddleware(logger));
