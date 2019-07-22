import React from 'react';
import Convert from '@lugia/devtools-conversion';
import Test from './test.json';
import Page from './Page';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        {Convert(Test)}
        <Page />
      </div>
    );
  }
}

export default App;
