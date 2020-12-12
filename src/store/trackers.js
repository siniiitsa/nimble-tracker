import { createSlice } from '@reduxjs/toolkit';

const createTracker = (name) => {
  const now = Date.now();
  return { id: `id_${now}`, name, ms: 0, lastUpdate: now, running: true };
};

const slice = createSlice({
  name: 'trackers',
  initialState: [],
  reducers: {
    initTrakers(trackers, { payload: { trackers: initialTrackers } }) {
      trackers.push(...initialTrackers);
    },
    addTracker(trackers, { payload: { name } }) {
      return [createTracker(name), ...trackers];
    },
    removeTracker(trackers, { payload: { id } }) {
      return trackers.filter((t) => t.id !== id);
    },
    toggleRunning(trackers, { payload: { id } }) {
      const tracker = trackers.find((t) => t.id === id);
      const now = Date.now();
      if (tracker.running) {
        const diff = now - tracker.lastUpdate;
        tracker.ms += diff;
      } else {
        tracker.lastUpdate = now;
      }
      tracker.running = !tracker.running;
    },
    updateTrackers(trackers) {
      const now = Date.now();
      return trackers.map((t) => {
        if (!t.running) return t;
        const diff = now - t.lastUpdate;
        return { ...t, ms: t.ms + diff, lastUpdate: now };
      });
    },
  },
});

export const {
  initTrakers,
  addTracker,
  removeTracker,
  toggleRunning,
  updateTrackers,
} = slice.actions;

export default slice.reducer;
