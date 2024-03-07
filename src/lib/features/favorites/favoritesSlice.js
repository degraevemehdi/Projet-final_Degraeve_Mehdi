import { createSlice } from "@reduxjs/toolkit";

export const favoritesSlice = createSlice({
    name: 'favorites',
    initialState: {
      items: [],
    },
    reducers: {
      addFavorite: (state, action) => {
        // Ajoute le livre à la liste des favoris s'il n'est pas déjà présent
        const book = action.payload;
        if (!state.items.find(item => item.id === book.id)) {
          state.items.push(book);
        }
      },
      // Optionnel: tu peux aussi ajouter une action pour retirer des favoris
      removeFavorite: (state, action) => {
        state.items = state.items.filter(item => item.id !== action.payload.id);
      },
    },
  });
  
  export const { addFavorite, removeFavorite } = favoritesSlice.actions;
  
  export default favoritesSlice.reducer;