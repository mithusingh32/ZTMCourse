import {Component, ErrorInfo} from 'react';

interface ErrorState {
  hasError: boolean;
}

interface ErrorProp {
  children: JSX.Element;
  msg?: string;
}

// Error Boundaries must be a class component
class ErrorBoundary extends Component<ErrorProp, ErrorState> {
  constructor(props: ErrorProp) {
    super(props);
    this.state = {
      hasError: false,
    };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    if (error) console.log(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return this.props.msg ? <h1>{this.props.msg}</h1> : <h1>Error Loading Data</h1>;
    } else {
      return this.props.children;
    }
  }
}

export default ErrorBoundary;
