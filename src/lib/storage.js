const appName = 'nimble-tracker';

const paths = {
  trackers: () => [appName, 'trackers'].join('/'),
};

const saveTrackers = (trackers) => {
  const data = JSON.stringify(trackers);
  localStorage.setItem(paths.trackers(), data);
  return true;
};

const getTrackers = () => {
  const data = localStorage.getItem(paths.trackers()) || '[]';
  return JSON.parse(data);
};

export default {
  saveTrackers,
  getTrackers,
};
