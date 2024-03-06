import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    isRegistered: false,
    username: '',
    password: '',
    loginError: null,
    isLoggedIn: false, // on va suivre l'état de connexion 
    
  },
  reducers: {
    register: (state, action) => {
      const { username, password } = action.payload;
      state.isRegistered = true;
      state.username = username;
      state.password = password;
    
      localStorage.setItem('registeredUser', JSON.stringify({ username, password }));
    },
    // login: (state, action) => {
    //   const { username, password } = action.payload;
    //   const registeredUser = JSON.parse(localStorage.getItem('registeredUser'));
    //   if (registeredUser && registeredUser.username === username && registeredUser.password === password) {
    //     alert('Login successful!');
    //   } else {
    //     alert('Login failed: User not found or password does not match.');
    //   }
    // },
    loginSuccess: (state, action) => {
      // state.loginSuccess = true;
      state.isLoggedIn = true;
      state.username = action.payload.username; 
  },
  loginFailure: (state, action) => {
      state.loginError = action.payload.error;
  },
  },
});

export const { register, loginSuccess, loginFailure } = userSlice.actions;

export default userSlice.reducer;
