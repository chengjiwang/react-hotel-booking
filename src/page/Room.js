import React, { Fragment, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from "react-router-dom";
import { fetchSingleRoom } from 'slice/roomsSlice';
import Loading from 'component/Loading/Loading';
import RoomHeader from 'component/RoomHeader/RoomHeader';
import RoomInformation from 'component/RoomInformation/RoomInformation';
import RoomAmenity from 'component/RoomAmenity/RoomAmenity';
import RoomBooking from 'component/RoomBooking/RoomBooking';

const Room = ({ match }) => {
  const { roomId } = match.params;
  const dispatch = useDispatch();
  const roomStatus = useSelector(state => state.rooms.singleRoomStatus);
  const singleRoom = useSelector(state => state.rooms.singleRoom);
  
  useEffect(() => {
    dispatch(fetchSingleRoom(roomId));
  }, [dispatch, roomId]);

  let content;
  if (roomStatus === 'loading') {
    content = <Loading />;
  } else if (roomStatus === 'succeeded') {
    const { room, booking } = singleRoom;
    console.log('room:', room[0]);
    content = <RoomExcerpt key={room[0].id} room={room[0]} booking={booking} />
  }

  return (
    <Fragment>
      { content }
    </Fragment>
  );
}

export default Room;

const RoomExcerpt  = ({ room, booking }) => {
  const dispatch = useDispatch();
  const getRoom = (roomId) =>{
    dispatch(fetchSingleRoom(roomId));
  };
  return (
    <Fragment>
      <RoomHeader imageUrl={room.imageUrl} />   
      <div className="container">
        <main className="row my-5">
          <div className="col-sm-12 col-lg-6 text-left">
            <RoomInformation room={room} /> 
            <RoomAmenity amenities={room.amenities} /> 
          </div>
          <div className="col-sm-12 col-lg-6">
            <RoomBooking booking={booking} roomId={room.id} updateRoom={getRoom} />
          </div>
          <Link to="/" className="btn btn-outline-primary ml-3 mt-4">回首頁</Link>
        </main>
      </div>     
    </Fragment>
  )
}