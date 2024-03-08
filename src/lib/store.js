import { configureStore } from "@reduxjs/toolkit";
import userReducer from './features/user/userSlice';
import searchReducer from './features/search/searchSlice'
import favoritesReducer from './features/favorites/favoritesSlice'


const store =  configureStore({
    reducer: {
      user: userReducer,
      search: searchReducer,
      favorites: favoritesReducer,
      
    },
  });
export default store