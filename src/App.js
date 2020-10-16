import React from 'react';
import {
  HashRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from 'page/Home';
import Room from 'page/Room';

function App() {
  return (
    <Router>     
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/room/:roomId" component={Room} />
      </Switch> 
    </Router>
  );
}

export default App;
