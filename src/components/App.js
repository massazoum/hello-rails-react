// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Greeting from './Greeting';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Greeting} />
        {/* Add more routes if needed */}
      </Switch>
    </Router>
  );
}

export default App;
