import React from "react";
import { Switch } from "react-router-dom";

// CSS
import "bootstrap/dist/css/bootstrap.min.css";

// Jobs List Page
import Jobs from "./containers/Jobs";

// Public Page Layout
import PublicPageLayout from "./containers/PublicPageLayout";

class App extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
        <div>
            <Switch>
                <PublicPageLayout
                    exact
                    path="/"
                    component={Jobs}
                />
            </Switch>
        </div>
    );
  }
}

export default App;
