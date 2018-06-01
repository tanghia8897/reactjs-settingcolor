import React, { Component } from 'react';
import './App.css';
import ColorPicker from './component/ColorPicker';
import SizeSetting from './component/SizeSetting';
import Reset from './component/Reset';
import Result from './component/Result';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color: 'red',
      fontSize: 15
    }
  }
  onReset = (value)=>{
    if(value){
      this.setState({
        color: 'red',
        fontSize: 15
      })
    }
  }
  onChangeSize = (value)=>{
      this.setState({
         fontSize: (this.state.fontSize + value >=8 && this.state.fontSize + value <= 36) ? this.state.fontSize + value : this.state.fontSize        
      })
  }  
  onChangeColor = (color)=>{
    this.setState({
      color:color
    })
  }
  render() {
    return (
      <div className="container mt-50 pt-100">
          <div className="row">
              <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                  <ColorPicker onChangeColor={this.onChangeColor } defaultColor={ this.state.color } />
              </div>
              <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                  <SizeSetting size={this.state.fontSize} onChangeSize = {this.onChangeSize} />
                  <Reset onReset={this.onReset} />
              </div>
              <Result color={this.state.color} fontSize={this.state.fontSize} />
          </div>
      </div>
    );
  }
}

export default App;
