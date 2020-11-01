import React, { Component, Fragment } from 'react';
import { Link } from "react-router-dom";
import { apiGetRoom } from 'services/EventService';
import Loading from 'component/Loading/Loading';
import RoomHeader from 'component/RoomHeader/RoomHeader';
import RoomInformation from 'component/RoomInformation/RoomInformation';
import RoomAmenity from 'component/RoomAmenity/RoomAmenity';
import RoomBooking from 'component/RoomBooking/RoomBooking';

class Room extends Component {
  state = {
    room: [],
    booking: [],
    isActive: false
  };
  componentDidMount() {
    const roomId = this.props.match.params.roomId;
    this.getRoom(roomId);
  };
  getRoom = (id) => {
    this.setState({ isActive: true });
    apiGetRoom(id).then(res => {    
      this.setState({ 
        room: res.data.room[0],
        booking: res.data.booking,
        isActive: false
      });
    });
  };
  render() {
    const { room, booking, isActive } = this.state;
    return (
      <Fragment>
        { isActive && <Loading /> }
        { room.imageUrl && <RoomHeader imageUrl={room.imageUrl} /> }
        { room.name && (
          <div className="container">
            <main className="row my-5">
              <div className="col-sm-12 col-lg-6 text-left">
                <RoomInformation room={room} /> 
                <RoomAmenity amenities={room.amenities} /> 
              </div>
              <div className="col-sm-12 col-lg-6">
                <RoomBooking booking={booking} roomId={room.id} updateRoom={this.getRoom} />
              </div>
              <Link to="/" className="btn btn-outline-primary ml-3 mt-4">回首頁</Link>
            </main>
          </div>
        )}
      </Fragment>
    );
  }
}

export default Room;