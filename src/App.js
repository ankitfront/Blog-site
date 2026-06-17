import './App.css';
import React, { Component } from 'react'

import News from './components/News';
import Navbar from './components/Navbar';
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";

export default class App extends Component {
  pagesize = 15;

  state = {
    progress: 0
  }

  setProgress = (progress) => {
    this.setState({ progress: progress });
  }

  render() {
    return (
      <Router>

        <Navbar />

        <LoadingBar
          height={3}
          color="#f11946"
          progress={this.state.progress}
        />

        <Routes>

          <Route
            exact
            path="/"
            element={
              <News
                setProgress={this.setProgress}
                key="world"
                pageSize={this.pagesize}
                country="us"
                category="world"
              />
            }
          />

          <Route
            exact
            path="/general"
            element={
              <News
                setProgress={this.setProgress}
                key="world"
                pageSize={this.pagesize}
                country="us"
                category="world"
              />
            }
          />

          <Route
            exact
            path="/sports"
            element={
              <News
                setProgress={this.setProgress}
                key="sports"
                pageSize={this.pagesize}
                country="us"
                category="sports"
              />
            }
          />

          <Route
            exact
            path="/business"
            element={
              <News
                setProgress={this.setProgress}
                key="business"
                pageSize={this.pagesize}
                country="us"
                category="business"
              />
            }
          />

          <Route
            exact
            path="/technology"
            element={
              <News
                setProgress={this.setProgress}
                key="technology"
                pageSize={this.pagesize}
                country="us"
                category="technology"
              />
            }
          />

          <Route
            exact
            path="/entertainment"
            element={
              <News
                setProgress={this.setProgress}
                key="entertainment"
                pageSize={this.pagesize}
                country="us"
                category="entertainment"
              />
            }
          />

          <Route
            exact
            path="/health"
            element={
              <News
                setProgress={this.setProgress}
                key="health"
                pageSize={this.pagesize}
                country="us"
                category="health"
              />
            }
          />

          <Route
            exact
            path="/science"
            element={
              <News
                setProgress={this.setProgress}
                key="science"
                pageSize={this.pagesize}
                country="us"
                category="science"
              />
            }
          />

        </Routes>

      </Router>
    )
  }
}