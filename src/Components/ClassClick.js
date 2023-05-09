import React, { Component } from 'react'

export class ClassClick extends Component {
    clickHandler(){
        console.log("Clicked the class button");
    }
  render() {
    return (
      <div>
        <button onClick={this.clickHandler}>Click me</button>
      </div>
    )
  }
}

export default ClassClick