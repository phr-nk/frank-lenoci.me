// App.js

import React, { useState } from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Root from "./components/Root/Root";
import ProjectPage from "./components/Project/ProjectPage";
import my404 from "./components/404/404";
class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <section className="App">
        <Router>
          <Switch>
            <Route exact path="/" render={(props) => <Root {...props} />} />
            <Route
              exact
              path="/projects/:id"
              children={<ProjectPage></ProjectPage>}
            ></Route>
            <Route component={my404} />
          </Switch>
        </Router>
      </section>
    );
  }
}

export default App;
