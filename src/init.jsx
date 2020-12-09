import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import './styles.less';

export default () => {
  ReactDOM.render(<App name="Jane" />, document.getElementById('app'));
};
