import "./polyfills";

// Create and export the shared redux store.
import { createStore } from "./utils";

export const store = createStore();

// Alias and export other utility functions.
export { default as get } from "lodash.get";
export { default as set } from "immutable-set";
export { default as debounce } from "lodash.debounce";
export { default as cx } from "classnames";
export { connect, Provider } from "react-redux";
export { css, keyframes } from "emotion";
export { createSelector } from "reselect";
export {
  createResource,
  readEndpoint,
  updateResource,
  deleteResource,
  hydrateStore
} from "redux-json-api";
export { DataSet, Query, EditableEntity } from "./components";
export { getQueryFromEntityReference, getQueryFromRIO } from "./normalizers";