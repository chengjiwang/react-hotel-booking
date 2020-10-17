import React, { Fragment } from 'react';
import './roomInformation.scss';

const RoomInformation = (props) => {
  const { room } = props;
  return (
    <Fragment>
      <h1 className="room-title mb-4">{ room.name }</h1>
      <ul className="list-unstyled descriptionShort">
        <li>房客人數限制 : { room.descriptionShort.GuestMin} ~
          { room.descriptionShort.GuestMax} 人</li>
        <li>床型 : { room.descriptionShort.Bed[0] } </li>
        <li>衛浴數量 : { room.descriptionShort['Private-Bath'] } 間</li>
        <li>房間大小 : { room.descriptionShort.Footage } 平方公尺</li>
      </ul>
      <p className="description">{ room.description }</p>
      <section className="d-flex">
        <div className="col-7">
          <p className="check-status">Check In</p>
          <span className="check-time">
            { room.checkInAndOut.checkInEarly} - { room.checkInAndOut.checkInLate}
          </span>
        </div>
        <div className="col-5">
          <p className="check-status">Check Out</p>
          <span className="check-time"> { room.checkInAndOut.checkOut} </span>
        </div>
      </section>
    </Fragment>      
  );
};

export default RoomInformation;