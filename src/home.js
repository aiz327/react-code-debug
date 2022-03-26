import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

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
      this.setState({num: this.state.num + 1})
      this.setState({num: this.state.num + 1})
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

function Home() {
  useEffect(() => {
    console.log(Home.test)
    Home.test = true
  })
  return (
    <div className="Appdd">
      <Link to="/test">test页</Link>
      <div className="Appdd">
        123
        <NumDemo/>
      </div>
    </div>
  );
}

export default Home;