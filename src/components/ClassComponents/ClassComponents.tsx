import React from 'react'

class ClassComponents extends React.Component<{ name: string}>{
  state = {
    name: 'Mundo !!!'
  }
  render() {
    return <div>
      <p> Olá: {this.state.name}</p>
      <button onClick={() => {
        this.setState({ name: 'Michelle!!!'})
      }}> click me</button>
    </div>
  }
}
export default ClassComponents