import React from 'react';
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
import './roomCard.scss';

const RoomCard = ({ room }) => {
  const bgImage = room ? { backgroundImage : `url(${room.imageUrl})`} : null ;
  return (
    <div className="col-md-6 col-xl-4 pr">
      <Link to={`/room/${room.id}`}>
      <div className="card mb-5">
        <div className="card-image" style={bgImage} />
        <div className="card-body">
          <h2 className="card-name">{ room.name }</h2>
          <div className="justify-content-between card-price">
            <div className="normalday">
              <span className="normalday-price">NT.{ room.normalDayPrice }</span>
              <span className="normalday-unit">平日</span>
            </div>
            <div className="align-self-end card-holiday">
              NT.{ room.holidayPrice }假日
            </div>
          </div>
        </div>
      </div>
      </Link>
    </div>
  );
}

RoomCard.propTypes = {
  room: PropTypes.object
};

export default RoomCard;