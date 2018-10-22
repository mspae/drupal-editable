import "./polyfills";

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

export { createStore } from "./utils";
export {
  DataSet,
  Query,
  EditableEntity,
  EditableEntityForm
} from "./components";
export { getQueryFromEntityReference, getQueryFromRIO } from "./normalizers";
