import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuid } from "uuid";

const initialState = {
  users: [], // shared across tabs
  currentUser: {}, // unique per tab
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addUser: (state, { payload }) => {
      
      const newUser = {
        email: payload.email,
        password: payload.password,
        // id: uuid(),
      };
      state.users.push(newUser);
    },

    getUser: (state, { payload }) => {
      const foundUser = state.users.find(
        (user) =>
          user.email === payload.email && user.password === payload.password
      );

      if (foundUser) {
        state.currentUser = foundUser;
      } else {
        state.currentUser = {};
      }
    },

    // logoutUser: (state) => {
    //   state.currentUser = {};
    // },
  },
});

export const { addUser, getUser } = userSlice.actions;
export default userSlice.reducer;
