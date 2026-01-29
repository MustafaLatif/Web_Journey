import store from './Store';  // lowercase 'store' to match export
import { addBug, removeBug } from './Action';

store.subscribe(() => {
    console.log("store changed", store.getState());  // Fix method name
});

store.dispatch(addBug("bug"));  // Use action creator
store.dispatch(removeBug(1));   // Use action creator
store.dispatch(removeBug(2));   // Use action creator
store.dispatch(removeBug(3));   // Use action creator
store.dispatch(removeBug(4));   // Use action creator

console.log(store.getState());   // Fix method name