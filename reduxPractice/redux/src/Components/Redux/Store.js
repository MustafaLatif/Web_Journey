// // import {createStore} from  'react-redux';
// // import reducer from './Reducer'
// // createStore(reducer)
// // export default Store;
// //  import store from './Store';
// // import { addBug, removeBug } from './Action';

// // store.subscribe(() => {
// //     console.log("store changed", store.getState());
// // });

// // store.dispatch(addBug("First bug"));
// // store.dispatch(removeBug(1));

// // console.log(store.getState());
// import { createStore } from "redux";
// import { composeWithDevTools } from "@redux-devtools/extension";
// import reducer from "./Reducer";

// const store = createStore(reducer, composeWithDevTools());

// export default store;
import { configureStore } from "@reduxjs/toolkit";
import reducer from "./Reducer";

const store = configureStore({
  reducer: reducer,
  devTools: true // This replaces composeWithDevTools
});

export default store;

