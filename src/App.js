import React, { useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Test from './test'
import Home from './home'
import './App.css';

class NumDemo extends React.Component {
  state = {
    num: 1,
  }
  componentDidMount() {
    console.log('num')
    this.setState({
      num: this.state.num + 1
    })
  }
  componentWillMount() {
    this.setState({
      num: 10
    })
  }
  clickAdd = () => {
    this.setState({
      num: this.state.num + 1
    })
    this.setState({
      num: this.state.num + 1
    })
    // setTimeout(() =>
    //   {
    //     this.setState({num: this.state.num + 1})
    //   }
    // , 0);
    Promise.resolve().then(() => {
      this.setState({ num: this.state.num + 1 })
      this.setState({ num: this.state.num + 1 })
    })
  }
  render() {
    console.log("执行了")
    return (
      <div className="num-container">
        <div className="num">现在点击次数{this.state.num}</div>
        <button onClick={this.clickAdd}>点击+1</button>
      </div>
    )
  }
}

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/test" component={Test} />
        <Route path="/" component={Home} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
