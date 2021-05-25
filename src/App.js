import React from 'react';
import './App.css';

class NumDemo extends React.Component {
  state = {
    num: 1,
  }
  clickAdd = () => {
    this.setState({
      num: this.state.num + 1
    })
  }
  render() {
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
    <div className="Appdd">
      123
      <NumDemo/>
    </div>
  );
}

export default App;
