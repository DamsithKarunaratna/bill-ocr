import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor() {
    super();
    this.state = {
      imgPath: "EVVETT"
    }
  
  }

  handleImage = (evt) => {
    var reader  = new FileReader();

    reader.addEventListener("load", function () {
       console.log(reader.result);
       document.getElementById('img').src = reader.result;
    }, false);

    var selectedFile = document.getElementById('input').files[0];
    if (selectedFile) {
      reader.readAsDataURL(selectedFile);
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <hr/>
        <input type="file" id="input" accept="image/*" capture="camera" onChange={this.handleImage}/>
        <hr/>
        <img alt="image" id="img" width="500"/>
      </div>
    );
  }
}

export default App;
