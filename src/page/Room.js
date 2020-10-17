import React, { Component, Fragment } from 'react';
import { apiGetRoom } from 'services/EventService';
import RoomHeader from 'component/RoomHeader/RoomHeader';
import RoomInformation from 'component/RoomInformation/RoomInformation';
import RoomAmenity from 'component/RoomAmenity/RoomAmenity';

class Room extends Component {
  state = {
    room: []
  };
  componentDidMount() {
    console.log(this.props);
    const roomId = this.props.match.params.roomId;
    this.getRoom(roomId);
  };
  getRoom = (id) => {
    apiGetRoom(id).then(res => {
      console.log(res.data);
      this.setState({ room: res.data.room[0] });
    });
  };
  render() {
    const { room } = this.state;
    return (
      <Fragment>
        { room.imageUrl && <RoomHeader imageUrl={room.imageUrl} /> }
        <div className="container">
          <main className="row my-5">
            <div className="col-sm-12 col-lg-6 text-left">
              { room.name && <RoomInformation room={room} /> }
              { room.amenities && < RoomAmenity amenities={room.amenities} /> }
            </div>
          </main>
        </div>
      </Fragment>
    );
  }
}

export default Room;