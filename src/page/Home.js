import React, { Component } from 'react';
import { apiGetAllRooms } from 'services/EventService';
import Header from 'component/HomeHeader/HomeHeader';
import RoomCard from 'component/RoomCard/RoomCard';
import './home.scss';

class Home extends Component {
  state = {
    rooms: [],
  };
  componentDidMount() {
    this.getAllRooms();
  };
  getAllRooms = () => {
    apiGetAllRooms()
      .then((res)=> {
        console.log(res.data.items);
        this.setState({ rooms: res.data.items});
      });
  };
  render() {
    const { rooms } = this.state;
    return (
      <div>
        <Header room= {rooms[4]} />
        <section className="container hotel-body">
          <div className="row">
            {rooms.map(item => (
                <RoomCard key={item.id} room={item} />
              ))}
          </div>
        </section>
      </div>
    );
  }
}

export default Home;

