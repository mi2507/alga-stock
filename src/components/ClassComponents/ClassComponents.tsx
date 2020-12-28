import React from 'react'

class ClassComponents extends React.Component<{ name: string }>{
  constructor(props: any) {
    super(props)
    console.log('constructor reached')
  }
  state = {
    name: 'Mundo !!!'
  }

  componentDidMount() {
    console.log('did mount reached')
  }

  componentDidUpdate() {
    console.log('did update reached')
  }

  render() {
    console.log('render reached')
    return <div>
      <p> Olá: {this.state.name}</p>
      <button onClick={() => {
        this.setState({ name: 'Michelle!!!'})
      }}> click me</button>
    </div>
  }
}
export default ClassComponents