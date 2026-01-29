export const ADD_BUG = "ADD_BUG";      // Define constants
export const REMOVE_BUG = "REMOVE_BUG"; // for action types

export const addBug = (description) => ({
  type: ADD_BUG,                    // Use constants
  payload: { description }          // Match reducer expectation
});

export const removeBug = (id) => ({
  type: REMOVE_BUG,
  payload: { id }
});