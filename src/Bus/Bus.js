import React from "react";
import "./Bus.css";
import Moment from "react-moment";
import moment from "moment";

const bus = props => {
  return (
    <table className="Bus">
      <tr>
        <td className="RouteId">{props.routeId}</td>
        <td className="Headsign">{props.headsign}</td>
        <td className="TimeToGo">
          Za <Moment fromNow ago>
            {getFullDate(props.estimatedTime)}
          </Moment>
        </td>
     
      </tr>
    </table>
  );
};

const getFullDate = est => {
  return moment(new Date()).format("YYYY-MM-DD") + "T" + est;
};

export default bus;
