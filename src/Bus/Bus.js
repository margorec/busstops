import React from "react";
import "./Bus.css";
import Moment from 'react-moment';
import moment from 'moment';

const bus = props => {
  return (
    <div className="Bus">
      <p>
        Linia: {props.routeId} Kierunek: {props.headsign}
        Odjazd: <Moment fromNow ago>{getFullDate(props.estimatedTime)}</Moment>
      </p>
      
    </div>
  );
};

const getFullDate = (est) => {
    return moment(new Date()).format("YYYY-MM-DD") + "T" + est;
}

export default bus;
