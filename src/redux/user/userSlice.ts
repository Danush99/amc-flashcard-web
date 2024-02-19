import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { User } from "src/types";

interface UserState {
  user: User | null;
}

const initialState: UserState = {
  user: null,
};

const counterSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addUser: (state, action: PayloadAction<User>) => {
      state.user = action.payload;
    },
    removeUser: (state) => {
      state.user = null;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(userLogout.pending, () => {
        console.log("userLogout.pending");
      })
      .addCase(
        userLogout.fulfilled,
        (state) => {
          state.user = null;
        }
      )
  },
});

export const userLogout = createAsyncThunk(
  "user/userLogout",
  async () => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
  }
);

export const { addUser, removeUser } = counterSlice.actions;

export default counterSlice.reducer;