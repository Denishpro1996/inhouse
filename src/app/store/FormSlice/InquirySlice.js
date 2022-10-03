const { createSlice } = require("@reduxjs/toolkit");

const counterSlice = createSlice({
    name: 'inquiry',
    initialState:[],
    
    reducers: {
        inquiry: (state, action) => {
        state.push(action.payload);
      },

    },
  })

  export const {inquiry} = counterSlice.actions;
  export default counterSlice.reducer