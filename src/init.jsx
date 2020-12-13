import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import * as dayjs from 'dayjs';
import buildStore from './store';
import App from './components/App';
import { initTrackers, updateTrackers } from './store/trackers';
import './assets/styles/main.less';

const intervalOfUpdate = 100;
const defaultParams = {
  trackers: [],
  startUpdatingTrackers: true,
};

export default (params = {}) => {
  // Prepare
  const { trackers, startUpdatingTrackers } = { ...defaultParams, ...params };

  const store = buildStore();
  const { dispatch } = store;

  dispatch(initTrackers({ trackers }));

  if (startUpdatingTrackers) {
    setInterval(() => {
      dispatch(updateTrackers({ updateTime: +dayjs() }));
    }, intervalOfUpdate);
  }

  // Mount
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('app'),
  );
};
