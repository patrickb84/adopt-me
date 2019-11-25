// mostly code from reactjs.org/docs/error-boundaries.html

import React, { Component } from "react";
import { Link, Redirect } from "@reach/router";

// Lifecycle methods HAVE to be used with CLASS functions
// CLASS functions can't use hooks

class ErrorBoundary extends Component {
  state = { hasError: false, redirect: false };

  // also a lifecycle method
  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.error("ErrorBoundary caught an error", error, info);
  }

  // Gets called every time props change, or when state change
  // So anything that updates state/props also triggers this
  componentDidUpdate() {
    if (this.state.hasError) {
      setTimeout(() => this.setState({ redirect: true }), 5000);
      //? can also say
      // setTimeout(() => navigate('/'), 5000);
    }
  }

  render() {
    if (this.state.redirect) {
      return <Redirect to="/" />;
    }
    if (this.state.hasError) {
      return (
        <h1>
          There was an error with this listing. <Link to="/">Click here</Link>{" "}
          to go back to the home page or wait 5 seconds.
        </h1>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
