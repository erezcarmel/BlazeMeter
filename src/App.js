import React, { Component } from 'react';
import Sidebar from './components/Sidebar';
import resource from './resources/dataLoader'
import './style.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      isOpen: false,
      data: [],
      sortDir: 'ASC',
    };
  }
  
  componentWillMount() {
    this.load();
  }
  
  toggle = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };
  
  async load() {
    const data = await resource.get();
    this.setState({ data: data.data });
  };
  
  render() {
    return (
      <div className="App">
        <Sidebar
          isOpen={this.state.isOpen}
          toggle={this.toggle}
          refresh={() => this.load()}
          data={this.state.data}
        />
        <button className="btn" onClick={this.toggle}>open</button>
      </div>
    );
  }
}

export default App;
