import runApp from './init';
import storage from './lib/storage';

const trackers = storage.getTrackers();

runApp({ trackers });
