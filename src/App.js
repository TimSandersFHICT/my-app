import React from "react";
import NavBar from "./components/NavBar";
import { Router, Route, Switch } from "react-router-dom";
import history from "./utils/history";
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
          <Route path="/kweet-api" component={KweetApi} />
          <Route path="/user-api" component={UserApi} />
          <Route path="/post-kweet" component={PostKweetTest} />
          <Route path="/delete-kweet" component={DeleteKweet} />
          <Route path="/delete-user" component={DeleteUser} />
          {/*   */}

        </Switch>
      </Router>
    </div>
  );
}

export default App;