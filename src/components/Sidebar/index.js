import React, { Component } from 'react';
import Item from './Item';
import './style.css';

class Sidebar extends Component {
  constructor() {
    super();
    this.state = {
      sortDir: 'DESC',
    };
  }
  
  sort() {
    this.setState({ sortDir: this.state.sortDir === 'ASC' ? 'DESC' : 'ASC' });
    if (this.state.sortDir === 'ASC') {
      this.props.data.sort((a, b) => new Date(b.updated) - new Date(a.updated));
    } else {
      this.props.data.sort((a, b) => new Date(a.updated) - new Date(b.updated));
    }
  }
  
  render() {
    return (
      <div className={`side-bar ${this.props.isOpen ? 'open' : 'close'}`}>
        <div className="row header">
          <div className="title col-xs-7">Reports <span className="length" />{ this.props.data.length }</div>
          <div className="btns col-xs-5">
            <button className="glyphicon glyphicon-remove" onClick={this.props.toggle} />
            <button className="glyphicon glyphicon-repeat" onClick={this.props.refresh} />
          </div>
        </div>
  
        <div className="row search">
          <input className="col-xs-10" type="text" placeholder="Search" />
          <button className={`glyphicon glyphicon-sort-by-attributes${this.state.sortDir === 'DESC' ? '-alt' : ''} col-xs-2`} onClick={() => this.sort()} />
        </div>
  
        {
          this.props.data.length > 0 ?
            <div className="list-container"><ul className="list">
              {
                this.props.data.map(item => <Item key={item.id} item={item} />)
              }
            </ul></div> : <div className="empty">No data</div>
        }
        
      </div>
    );
  }
}

export default Sidebar;
