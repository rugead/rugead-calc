import React from 'react'

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
      errorInfo: null,
    }
  }

  componentDidCatch(error, errorInfo) {
    this.setState({
      hasError: true,
      error: error,
      errorInfo: errorInfo
    })
  };

  render() {
    const { x } = this.props
    if (this.state.errorInfo) {
      return (
          <div>
            <h1> something went wrong </h1>
            {this.state.error && this.state.error.toString()}
            {this.state.errorInfo.componenetStack}
            <h1> {console.log('xxx: ', x)} </h1>
          </div>  
      )

    }

    return this.props.children
  }
}

export default ErrorBoundary