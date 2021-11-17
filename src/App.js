// App.js

import React, { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Root from "./components/Root/Root";
import ProjectPage from "./components/Project/ProjectPage";
import { createBrowserHistory } from "history";

const history = createBrowserHistory();
class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      firstLoad: true,
    };
  }
  toggleLoad = () => {
    this.setState((state) => ({ firstLoad: !state.firstLoad }));
  };
  render() {
    return (
      <section className="App">
        <Router>
          <Route
            exact
            path="/"
            render={(props) => (
              <Root
                {...props}
                firstLoad={this.state.firstLoad}
                onLoad={this.toggleLoad}
              />
            )}
          />
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
