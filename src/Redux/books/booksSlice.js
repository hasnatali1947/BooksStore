import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  booklist: [],
};

const bookSlice = createSlice({
  name: 'bookList',
  initialState,
  reducers: {
    addBook: (state, action) => {
      state.booklist.push(action.payload);
    },
    removeBook: (state, action) => {
      state.booklist = state.booklist.filter((book) => book.id !== action.payload);
    },
  },
});

export default bookSlice.reducer;
export const { addBook, removeBook } = bookSlice.actions;
