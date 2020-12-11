import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { hot } from 'react-hot-loader/root';
import Container from './common/Container';
import AddTracker from './AddTracker';
import TrackersList from './TrackersList';
import storage from '../lib/storage';
import './App.less';

const App = () => {
  const trackers = useSelector((state) => state.trackers);

  useEffect(() => {
    storage.saveTrackers(trackers);
  }, [trackers]);

  return (
    <div className="App">
      <Container>
        <h1 className="logo">tracker</h1>
        <AddTracker />
        <TrackersList />
      </Container>
    </div>
  );
};

export default hot(App);
