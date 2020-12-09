import React from 'react';
import { hot } from 'react-hot-loader/root';
import Container from './common/Container';
import './App.less';

class App extends React.Component {
  render() {
    return (
      <main>
        <Container>
          <h1>tracker</h1>
        </Container>
      </main>
    );
  }
}

export default hot(App);
