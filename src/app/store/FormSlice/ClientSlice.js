const { createSlice } = require("@reduxjs/toolkit");

const counterSlice = createSlice({
    name: 'client',
    initialState:[],
    
    reducers: {
      client: (state, action) => {
        state.push(action.payload);
      },

    },
  })

  export const {client} = counterSlice.actions;
  export default counterSlice.reducer