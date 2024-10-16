import { createSlice } from "@reduxjs/toolkit";

interface IPostSlice {
  
}

const initialState: IPostSlice = {
  currentUser: undefined,
  access_token: "",
  refresh_token: "",
};

export const PostSlice = createSlice({
  name: "postSlice",
  reducers: {
    
  },
  initialState,
  extraReducers(builder) {
  },
});

export const { } = PostSlice.actions;

export default PostSlice.reducer;
