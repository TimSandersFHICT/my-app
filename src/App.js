import React from "react";
import NavBar from "./components/NavBar";
import { Router, Route, Switch } from "react-router-dom";
import Profile from "./components/Profile";
import history from "./utils/history";
import PrivateRoute from "./components/PrivateRoute";
import KweetApi from "./views/KweetApi";
import UserApi from "./views/UserApi";
import DeleteKweet from "./views/DeleteKweet";
import PostKweetTest from "./views/PostKweetTest";
import DeleteUser from "./views/DeleteUser";






function App() {
  return (
    <div className="App" >
      {/* Don't forget to include the history module */}
      <Router history={history}>
        <header>
          <NavBar />
        </header>
        <Switch>
          <Route path="/" exact />
          <PrivateRoute path="/profile" component={Profile} />
          <PrivateRoute path="/kweet-api" component={KweetApi} />
          <PrivateRoute path="/user-api" component={UserApi} />
          <PrivateRoute path="/post-kweet" component={PostKweetTest} />
          <PrivateRoute path="/delete-kweet" component={DeleteKweet} />
          <PrivateRoute path="/delete-user" component={DeleteUser} />
          {/*   */}

        </Switch>
      </Router>
    </div>
  );
}

export default App;