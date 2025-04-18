import { createSlice } from '@reduxjs/toolkit';
const initialState = {
   authData:null
  };

  const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
      setAuthData: (state, action) => {
        state.authData = action.payload.authData;
      },
    }
  });
  // Action creators are generated for each case reducer function
export const { setAuthData } = authSlice.actions;
export const selectAuthdata = (state) => state.auth.authData;
export default authSlice.reducer;