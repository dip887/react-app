import Navbar from "./Navbar";
import Home from "./Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Create from "./Create";
import BlogDetails from "./BlogDetails";
import NotFound from "./NotFound";

function App() {
  return (
    // jsx template
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          {/* switch is used for showing one route component at a time */}
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/create">
              <Create />
            </Route>
            {/* Route parameter */}
            <Route path="/blogs/:id">
              <BlogDetails />
            </Route>
            {/* it's a astrick sign , it's like catch-all route */}
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
