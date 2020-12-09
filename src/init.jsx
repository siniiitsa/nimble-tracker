import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import './styles.less';

export default () => {
  ReactDOM.render(<App />, document.getElementById('app'));
};
