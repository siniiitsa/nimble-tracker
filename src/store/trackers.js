import { createSlice } from '@reduxjs/toolkit';

const slice = createSlice({
  name: 'trackers',
  initialState: [],
  reducers: {
    initTrakers(trackers, { payload: { trackers: initialTrackers } }) {
      trackers.push(...initialTrackers);
    },
    addTracker(trackers, { payload: { name } }) {
      const prevIds = trackers.map((t) => t.id);
      const nextId = Math.max(...prevIds, 0) + 1;
      const tracker = { id: nextId, name, ms: 0, running: true };
      trackers.push(tracker);
    },
    removeTracker(trackers, { payload: { id } }) {
      return trackers.filter((t) => t.id !== id);
    },
    inrementTracker(trackers, { payload: { id } }) {},
  },
});

export const { initTrakers, addTracker, removeTracker } = slice.actions;

export default slice.reducer;
