import { configureStore } from "@reduxjs/toolkit";
import {userReducer} from './features/user/userSlice';

const makeStore =  configureStore({
    reducer: {
      user: userReducer,
    },
  });
export default makeStore