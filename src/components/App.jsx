import React from 'react';
import { hot } from 'react-hot-loader/root';
import Container from './common/Container';
import AddTracker from './AddTracker';
import './App.less';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Container>
          <h1 className="logo">tracker</h1>
          <AddTracker />
        </Container>
      </div>
    );
  }
}

export default hot(App);
