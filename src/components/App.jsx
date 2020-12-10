import React from 'react';
import { hot } from 'react-hot-loader/root';
import Container from './common/Container';
import AddTracker from './AddTracker';
import TrackersList from './TrackersList';
import './App.less';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Container>
          <h1 className="logo">tracker</h1>
          <AddTracker />
          <TrackersList />
        </Container>
      </div>
    );
  }
}

export default hot(App);
