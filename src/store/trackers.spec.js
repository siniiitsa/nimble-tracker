import buildStore from './index';
import { initTrackers, addTracker, removeTracker, toggleRunning, updateTrackers } from './trackers';

let store;
let dispatch;

beforeEach(() => {
  store = buildStore();
  dispatch = store.dispatch;
});

const getTrackers = () => store.getState().trackers;

describe('trackers slice', () => {
  it('should initialize a list of trackers', () => {
    const trackers = [{ id: 1 }, { id: 2 }, { id: 3 }];
    dispatch(initTrackers({ trackers }));

    expect(getTrackers()).toHaveLength(3);
  });

  it('should not add trackers when initialize an empty list of trackers', () => {
    const trackers = [];
    dispatch(initTrackers({ trackers }));

    expect(getTrackers()).toHaveLength(0);
  });

  it('should add tracker', () => {
    dispatch(addTracker({ creationTime: 0, name: 'a' }));

    expect(getTrackers()).toHaveLength(1);
  });

  it('should add tracker to the start of the list', () => {
    dispatch(addTracker({ creationTime: 0, name: 'a' }));
    dispatch(addTracker({ creationTime: 1, name: 'b' }));

    const firstTracker = getTrackers()[0];
    expect(firstTracker.name).toBe('b');
  });

  it('should add a tracker with "running" prop set to "true"', () => {
    dispatch(addTracker({ creationTime: 0, name: 'a' }));

    const tracker = getTrackers()[0];
    expect(tracker.running).toBe(true);
  });

  it('should remove a tracker', () => {
    const trackers = [{ id: 1 }];
    dispatch(initTrackers({ trackers }));

    dispatch(removeTracker({ id: 1 }));

    expect(getTrackers()).toHaveLength(0);
  });

  it('should not remove any trackers when given a wrong id', () => {
    const trackers = [{ id: 1 }];
    dispatch(initTrackers({ trackers }));

    dispatch(removeTracker({ id: 2 }));

    expect(getTrackers()).toHaveLength(1);
  });

  it('should switch running prop from false to true', () => {
    const trackers = [{ id: 1, running: false }];
    dispatch(initTrackers({ trackers }));

    dispatch(toggleRunning({ id: 1 }));

    const tracker = getTrackers()[0];
    expect(tracker.running).toBe(true);
  });

  it('should switch running prop from true to false', () => {
    const trackers = [{ id: 1, running: true }];
    dispatch(initTrackers({ trackers }));

    dispatch(toggleRunning({ id: 1 }));

    const tracker = getTrackers()[0];
    expect(tracker.running).toBe(false);
  });

  it('should only update running trackers', () => {
    const trackers = [
      { running: true, ms: 0, lastUpdate: 0 },
      { running: false, ms: 0, lastUpdate: 0 },
    ];
    dispatch(initTrackers({ trackers }));

    dispatch(updateTrackers({ updateTime: 1 }));

    const [first, second] = getTrackers();
    expect(first.lastUpdate).toBe(1);
    expect(second.lastUpdate).toBe(0);
  });
});
