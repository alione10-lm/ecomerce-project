import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  users: [{ username: "ussama", email: "ussama", password: "ussama" }],
  AuthentificatedUser: {},
  isAuthentificated: false,
};

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    Islogin: (state, action) => {
      state.AuthentificatedUser = action.payload;
      state.isAuthentificated = true;
    },
    // logout: (state, action) => {},
    addUser: (state, action) => {
      state.users.push(action.payload);
    },
    // deleteUser: (state, action) => {},
  },
});

export default usersSlice.reducer;
export const { addUser, deleteUser, Islogin, logout } = usersSlice.actions;
