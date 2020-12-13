import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import buildStore from './store';
import App from './components/App';
import { initTrackers, updateTrackers } from './store/trackers';
import './assets/styles/main.less';

const updateInterval = 100;

export default (data = { trackers: [] }) => {
  // Prepare
  const { trackers } = data;

  const store = buildStore();
  store.dispatch(initTrackers({ trackers }));

  setInterval(() => {
    store.dispatch(updateTrackers());
  }, updateInterval);

  // Mount
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('app'),
  );
};
