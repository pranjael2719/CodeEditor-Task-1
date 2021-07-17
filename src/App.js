
  import React, { Component } from 'react';

  export default class App extends Component {
    render() {
      return (
        <div style = {{textAlign: 'center'}}>
          <h3 style = {{fontSize: 40}}>Code Editor</h3>
          <label for="language" >Language: </label>
          <input type="radio" name="id"></input>
          <label style={{margin: 5}}>HTML</label>
          <input type="radio" name="id"></input>
          <label style={{margin: 5}}>CSS</label>
          <input type="radio" name="id"></input>
          <label style={{margin: 5}}>JavaScript</label>
          <div><textarea  style={{ height: 200, width: 700 }}></textarea></div>
          <button>Execute</button>
          <button style={{margin: 5}}>View Result</button>
        </div>
      );
    }
  }