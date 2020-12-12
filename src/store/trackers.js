import { createSlice } from '@reduxjs/toolkit';
import uniqid from 'uniqid';

const slice = createSlice({
  name: 'trackers',
  initialState: [],
  reducers: {
    initTrakers(trackers, { payload: { trackers: initialTrackers } }) {
      trackers.push(...initialTrackers);
    },
    addTracker(trackers, { payload: { name } }) {
      const tracker = { id: uniqid(), name, ms: 0, running: true };
      return [tracker, ...trackers];
    },
    removeTracker(trackers, { payload: { id } }) {
      return trackers.filter((t) => t.id !== id);
    },
    inrementTracker(trackers, { payload: { id } }) {},
  },
});

export const { initTrakers, addTracker, removeTracker } = slice.actions;

export default slice.reducer;
