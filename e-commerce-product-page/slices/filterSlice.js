import { createSlice } from "@reduxjs/toolkit";

const filterSlice = createSlice({
  name: "filter",
  initialState: { theme: "light", filter: "all" },
  reducers: {
      changeFilter (state, action){
          state.filter = action.payload
      },
      changeTheme (state, action){
        //   state.theme === 'light' ? state.theme = 'dark' : state.theme = 'light' 
        state.theme = action.payload
      }
  },
});

export default filterSlice.reducer;

export const { changeFilter, changeTheme } = filterSlice.actions
