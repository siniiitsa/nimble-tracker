import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import buildStore from './store';
import App from './components/App';
import './styles.less';

export default () => {
  // Prepare
  const store = buildStore();

  // Mount
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('app'),
  );
};
