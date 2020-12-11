import { createSlice } from '@reduxjs/toolkit';

let lastId = 0;

const createTracker = (name) => ({
  id: ++lastId,
  name,
  ms: 0,
  running: true,
});

const slice = createSlice({
  name: 'trackers',
  initialState: [],
  reducers: {
    initTrakers(trackers, { payload: { trackers: initialTrackers } }) {
      trackers.push(...initialTrackers);
    },
    addTracker(trackers, { payload: { name } }) {
      trackers.push(createTracker(name));
    },
    removeTracker(trackers, { payload: { id } }) {
      return trackers.filter((t) => t.id !== id);
    },
    inrementTracker(trackers, { payload: { id } }) {},
  },
});

export const { initTrakers, addTracker, removeTracker } = slice.actions;

export default slice.reducer;
