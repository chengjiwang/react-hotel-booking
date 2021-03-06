import React from 'react';
import PropTypes from 'prop-types';
import './roomHeader.scss';

const RoomHeader = ({ imageUrl }) => {
  return (
    <div className="container-fluid room">
      <header className="row room-header">
        <div className="col-8 bg-cover"
          style={{backgroundImage: `url(${imageUrl[0]})`}} />
        <div className="col-4">
          <div className="row d-flex flex-column h-100">
            <div className="bg-cover h-50" style={{backgroundImage: `url(${imageUrl[1]})`}} />
            <div className="bg-cover h-50" style={{backgroundImage: `url(${imageUrl[2]})`}} />
          </div>
        </div>
      </header>
    </div>
  );
};

RoomHeader.propTypes = {
  imageUrl: PropTypes.array
};

export default RoomHeader;