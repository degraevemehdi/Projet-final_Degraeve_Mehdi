import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    isRegistered: false,
    username: '',
    password: '',
  },
  reducers: {
    register: (state, action) => {
      const { username, password } = action.payload;
      state.isRegistered = true;
      state.username = username;
      state.password = password;
    
      localStorage.setItem('registeredUser', JSON.stringify({ username, password }));
    },
    login: (state, action) => {
      const { username, password } = action.payload;
      const registeredUser = JSON.parse(localStorage.getItem('registeredUser'));
      if (registeredUser && registeredUser.username === username && registeredUser.password === password) {
        alert('Login successful!');
      } else {
        alert('Login failed: User not found or password does not match.');
      }
    },
  },
});

export const { register, login } = userSlice.actions;

export default userSlice.reducer;
