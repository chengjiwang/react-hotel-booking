import React, { Component } from 'react';

class Room extends Component {
  componentDidMount() {
    console.log(this.props);
  };
  // setRoomId(params.roomId);
  // console.log(this.state.roomId);
  // componentDidMount() {
  //   console.log(this);
  //   this.getCurrentRoomData();
  // };
  // getCurrentRoomData = () =>{
  //   // const {location} = this.props.state;
  //   console.log(this.props);
  // };
  render() {
    return (
      <div>
        room
      </div>
    );
  }
}

export default Room;