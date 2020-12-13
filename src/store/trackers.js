import { createSlice } from '@reduxjs/toolkit';

const createTracker = (creationTime, name) => {
  return { id: `id_${creationTime}`, name, ms: 0, lastUpdate: creationTime, running: true };
};

const slice = createSlice({
  name: 'trackers',
  initialState: [],
  reducers: {
    initTrackers(trackers, { payload: { trackers: initialTrackers } }) {
      trackers.push(...initialTrackers);
    },
    addTracker(trackers, { payload: { creationTime, name } }) {
      return [createTracker(creationTime, name), ...trackers];
    },
    removeTracker(trackers, { payload: { id } }) {
      return trackers.filter((t) => t.id !== id);
    },
    toggleRunning(trackers, { payload: { id, toggleTime } }) {
      const tracker = trackers.find((t) => t.id === id);
      if (tracker.running) {
        const diff = toggleTime - tracker.lastUpdate;
        tracker.ms += diff;
      } else {
        tracker.lastUpdate = toggleTime;
      }
      tracker.running = !tracker.running;
    },
    updateTrackers(trackers, { payload: { updateTime } }) {
      return trackers.map((t) => {
        if (!t.running) return t;
        const diff = updateTime - t.lastUpdate;
        return { ...t, ms: t.ms + diff, lastUpdate: updateTime };
      });
    },
  },
});

export const {
  initTrackers,
  addTracker,
  removeTracker,
  toggleRunning,
  updateTrackers,
} = slice.actions;

export default slice.reducer;
