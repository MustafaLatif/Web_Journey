// /// Reducer is the function with two parameters state and action
// ///state is the current state of the application
// ///action is the object which is passed to the dispatch function

// let lastId=0;
//  export default function reducer(state=[], action) {
// //switch(action.type){
//  //   case "bugAdded":
//  //   case "bugRemoved":  
// //case "bugAdded":

// // if(action.type==='BugAdded')
// //     return[
// // ...state,
// // {
// //     id:++lastId,
// //     description:action.Payload.description,
// //     resolved: false
// //}
// //case "bugRemoved":
//    // return state.filter(bug => bug.id !== action.Payload.id);
// // Default:
// // return state;
// // }

// if(action.type==='BugAdded')
//     return[
// ...state,
// {
//     id:++lastId,
//     description:action.Payload.description,
//     resolved: false
// }
//     ]
// else if(action.type==='bugRemoved')
//     return state.filter(bug => bug.id !== action.Payload.id);
// return state;
// }
const initialState = {
  bugs: []
};

function bugReducer(state = initialState, action) {
  switch (action.type) {
    case "ADD_BUG":
      return {
        ...state,
        bugs: [...state.bugs, { id: Date.now(), description: action.payload }]
      };

    case "REMOVE_BUG":
      return {
        ...state,
        bugs: state.bugs.filter(bug => bug.id !== action.payload)
      };

    default:
      return state;
  }
}

export default bugReducer;
