const { createSlice } = require("@reduxjs/toolkit");

const counterSlice = createSlice({
  name: "add",
  initialState: [],

  reducers: {
    add: (state, action) => {
      state.push(action.payload);
    },
  },
});

export const { add } = counterSlice.actions;
export default counterSlice.reducer;
