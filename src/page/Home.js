import React, { Component } from 'react';
import { apiGetAllRooms } from 'services/EventService';
import Loading from 'component/Loading/Loading';
import Header from 'component/HomeHeader/HomeHeader';
import RoomCard from 'component/RoomCard/RoomCard';
import './home.scss';

class Home extends Component {
  state = {
    rooms: [],
    isActive: false
  };
  componentDidMount() {
    this.getAllRooms();
  };
  getAllRooms = () => {
    this.setState({ isActive: true });
    apiGetAllRooms()
      .then((res)=> {
        this.setState({ 
          rooms: res.data.items,
          isActive: false
        });
      });
  };
  render() {
    const { rooms, isActive } = this.state;
    return (
      <div>
        { isActive && <Loading /> }
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

