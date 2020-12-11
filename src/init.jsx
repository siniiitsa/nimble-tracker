import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import buildStore from './store';
import App from './components/App';
import { initTrakers } from './store/trackers';
import './styles.less';

export default (data = { trackers: [] }) => {
  // Prepare
  const { trackers } = data;

  const store = buildStore();
  store.dispatch(initTrakers({ trackers }));

  // Mount
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('app'),
  );
};
