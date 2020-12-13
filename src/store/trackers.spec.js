import buildStore from './index';
import { initTrackers, addTracker, removeTracker, toggleRunning, updateTrackers } from './trackers';

let store;

beforeEach(() => {
  store = buildStore();
});

const getTrackers = () => store.getState().trackers;

describe('trackers slice', () => {
  describe('initTrackers', () => {
    it('should not add trackers when init an empty list of trackers', () => {
      store.dispatch(initTrackers({ trackers: [] }));

      expect(getTrackers()).toHaveLength(0);
    });

    it('should add trackers when init a list of trackers', () => {
      const trackers = [{}, {}, {}];

      store.dispatch(initTrackers({ trackers }));

      expect(getTrackers()).toHaveLength(3);
    });
  });

  describe('addTracker', () => {
    it('should add tracker', () => {
      store.dispatch(addTracker({ name: 'a' }));

      expect(getTrackers()).toHaveLength(1);
    });

    it('should add tracker to the start of the list', () => {
      store.dispatch(addTracker({ name: 'a' }));
      store.dispatch(addTracker({ name: 'b' }));

      const firstTracker = getTrackers()[0];
      expect(firstTracker.name).toEqual('b');
    });

    it('should create a running tracker', () => {
      store.dispatch(addTracker({ name: 'a' }));

      const tracker = getTrackers()[0];
      expect(tracker.running).toEqual(true);
    });
  });

  describe('removeTracker', () => {
    it('should remove the tracker', () => {
      const trackers = [{ id: 1 }, {}, {}];
      store.dispatch(initTrackers({ trackers }));

      store.dispatch(removeTracker({ id: 1 }));

      expect(getTrackers()).toHaveLength(2);
    });
  });

  describe('toggleRunning', () => {
    it('should switch running prop from false to true', () => {
      const trackers = [{ id: 1, running: false }];
      store.dispatch(initTrackers({ trackers }));

      store.dispatch(toggleRunning({ id: 1 }));

      const tracker = getTrackers()[0];
      expect(tracker.running).toEqual(true);
    });

    it('should switch running prop from true to false', () => {
      const trackers = [{ id: 1, running: true }];
      store.dispatch(initTrackers({ trackers }));

      store.dispatch(toggleRunning({ id: 1 }));

      const tracker = getTrackers()[0];
      expect(tracker.running).toEqual(false);
    });
  });

  describe('updateTrackers', () => {
    it('should update running trackers', () => {
      const trackers = [{ ms: 0, lastUpdate: 0, running: true }];
      store.dispatch(initTrackers({ trackers }));

      store.dispatch(updateTrackers());

      setTimeout(() => {
        const tracker = getTrackers()[0];
        expect(tracker.ms).toBeGreaterThan(0);
        expect(tracker.lastUpdate).toBeGreaterThan(0);
      }, 10);
    });

    it('should update running trackers', () => {
      const trackers = [{ ms: 0, lastUpdate: 0, running: false }];
      store.dispatch(initTrackers({ trackers }));

      store.dispatch(updateTrackers());

      setTimeout(() => {
        const tracker = getTrackers()[0];
        expect(tracker.ms).toEqual(0);
        expect(tracker.lastUpdate).toEqual(0);
      }, 10);
    });
  });
});
