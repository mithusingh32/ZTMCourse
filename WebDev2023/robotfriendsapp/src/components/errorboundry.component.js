import {Component} from "react";

// Error Boundaries must be a class component
class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hasError: false
        }
    }
    
    componentDidCatch(error, errorInfo) {
        if (error) console.log(error, errorInfo)
    }

    render() {
        if (this.state.hasError) {
            return <h1>Error Loading Data</h1>
        } else {
            return this.props.children;
        }
    }

}

export default ErrorBoundary;
