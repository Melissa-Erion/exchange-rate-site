import React from "react";
import Layout from './Layout';

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./App.css";

const App = () => {
  return (
    <Router basename="/exchange-rate-site">
      <Switch>
        <Route path="/" exact render={() => <h1>Hello world</h1>} />

        <Route render={() => <h1>404 Not found</h1>} />
      </Switch>
      <Layout></Layout>
    </Router>
  );
};

export default App;
