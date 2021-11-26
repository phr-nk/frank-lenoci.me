// App.js

import React, { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Root from "./components/Root/Root";
import ProjectPage from "./components/Project/ProjectPage";

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <section className="App">
        <Router>
          <Route exact path="/" render={(props) => <Root {...props} />} />
          <Route
            exact
            path="/projects/:id"
            children={<ProjectPage></ProjectPage>}
          ></Route>
        </Router>
      </section>
    );
  }
}

export default App;
