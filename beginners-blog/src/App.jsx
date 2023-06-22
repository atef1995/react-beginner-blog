import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import "./App.css";
import Blog from "./pages/Blog";
import Home from "./pages/Home";
import PrivacyPolicy from "./pages/privacy/PrivacyPolicy";

const App = () => {
  return (
    <div className="container">
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/blog/:id" component={Blog} />
        <Route path="/privacypolicy" component={PrivacyPolicy}></Route>
        <Redirect to="/" />
      </Switch>
    </div>
  );
};

export default App;
