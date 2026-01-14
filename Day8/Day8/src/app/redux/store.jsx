// store.js
import { configureStore, combineReducers } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage"; // localStorage
import createWebStorage from "redux-persist/lib/storage/createWebStorage";
import { persistReducer, persistStore } from "redux-persist";
import {
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";

import userSlice from "./slices/userSlice";
import projectSlice from "./slices/projectSlice";
import issueSlice from "./slices/issuesSlice";

// 🔧 Custom storage creator for sessionStorage
const createNoopStorage = () => ({
  getItem() {
    return Promise.resolve(null);
  },
  setItem(value) {
    return Promise.resolve(value);
  },
  removeItem() {
    return Promise.resolve();
  },
});

const sessionStorage =
  typeof window !== "undefined"
    ? createWebStorage("session")
    : createNoopStorage();

// ✅ persist only users (shared)
const usersPersistConfig = {
  key: "users",
  storage, // localStorage
  whitelist: ["users"],
};

// ✅ persist only currentUser (tab-specific)
const currentUserPersistConfig = {
  key: "currentUser",
  storage: sessionStorage, // sessionStorage
  whitelist: ["currentUser"],
};

// ✅ Combine reducers properly
const userPersistedReducer = persistReducer(
  usersPersistConfig,
  persistReducer(currentUserPersistConfig, userSlice)
);

const rootReducer = combineReducers({
  user: userPersistedReducer,
  project: projectSlice,
  issues: issueSlice,
});   

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoreActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);