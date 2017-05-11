import React from 'react';
import moment from 'moment';

function Item({ item }) {
  return (
    <li>
      <div className="row">
        <div className="details col-xs-8">
          <div className="name">{ item.name }</div>
          <div className="type">{ item.type }</div>
          {item.location ? <div className="location"><span className="glyphicon glyphicon-map-marker"/>{ item.location }</div> : ''}
          {item.url ? <a href={ item.url } className="" target="_blank"><span className="url glyphicon glyphicon-home"/></a> : ''}
        </div>
        <div className="date col-xs-4">
          <div className="day">{ moment(item.updated).format('MMM DD') }</div>
          <div className="time">{ moment(item.updated).format('h:mm a') }</div>
        </div>
      </div>
    </li>
  );
}

export default Item;
