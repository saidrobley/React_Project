import React from 'react';
import Clock from './Clock';
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: new Date().toLocaleTimeString() };
  }

  componentDidMount() {
    this.myInterval = setInterval(() => {
      this.setState({ count: new Date().toLocaleTimeString() });
    }, 1000);
  }

  render() {
    return (
      <div>
        <Clock time={this.state.count} />
      </div>
    );
  }
}

export default App;
