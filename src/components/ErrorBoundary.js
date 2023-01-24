import { Component } from "react";

class ErrorBoundary extends Component {
  constructor() {
    super();

    this.state = { hasError: false };
  }
  componentDidCatch(error) {
    console.log("Error", error);
    this.setState({
      hasError: true,
    });
  }

  render() {
    if (this.state.hasError) {
      return <p>Some error!</p>;
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
