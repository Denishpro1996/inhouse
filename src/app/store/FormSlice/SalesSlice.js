const { createSlice } = require("@reduxjs/toolkit");

const counterSlice = createSlice({
    name: 'sales',
    initialState:[],
    
    reducers: {
        sales: (state, action) => {
        state.push(action.payload);
      },
    },
  })

  export const {sales} = counterSlice.actions;
  export default counterSlice.reducer