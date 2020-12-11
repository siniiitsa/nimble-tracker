import { createSlice } from '@reduxjs/toolkit';

let lastId = 0;

const createTracker = (name) => ({
  id: ++lastId,
  name,
  time: '00:44:11',
});

const slice = createSlice({
  name: 'trackers',
  initialState: [],
  reducers: {
    addTracker(trackers, { payload: { name } }) {
      trackers.push(createTracker(name));
    },
    removeTracker(trackers, { payload: { id } }) {
      return trackers.filter((t) => t.id !== id);
    },
    inrementTracker(trackers, { payload: { id } }) {},
  },
});

export const { addTracker } = slice.actions;

export default slice.reducer;
