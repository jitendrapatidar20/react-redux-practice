import React from "react";
import "./styles/App.scss";
import Home from "./components/pages/Home";
import Navbar from "./components/elements/Navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AddPost from "./components/Posts/AddPost";
import Post from "./components/Posts/Post";
import UpdatePost from "./components/Posts/UpdatePost";
import { Provider } from "react-redux";
// import store from "./store";
import ReactThunk from "./ReactThunk";

import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';



// use applyMiddleware to add the thunk middleware to the store
const store = createStore(rootReducer, applyMiddleware(thunk));

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/addPost" component={AddPost} />
            <Route exact path="/post/:id" component={Post} />
            <Route exact path="/updatePost/:id" component={UpdatePost} />
            <Route exact path="/reactThunk" component={ReactThunk} />
          </Switch>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
