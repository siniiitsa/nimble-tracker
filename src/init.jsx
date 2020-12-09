import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './styles.less';

export default () => {
  ReactDOM.render(<App name="Jane" />, document.getElementById('app'));
};
