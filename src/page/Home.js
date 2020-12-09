import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchRooms } from 'slice/roomsSlice';
import Loading from 'component/Loading/Loading';
import Header from 'component/HomeHeader/HomeHeader';
import RoomCard from 'component/RoomCard/RoomCard';
import './home.scss';

const Home = () => {
  const dispatch = useDispatch();
  const rooms = useSelector(state => state.rooms.allRoom);
  const roomStatus = useSelector(state => state.rooms.allRoomStatus);
  
  useEffect(() => {
    if (roomStatus === 'idle') {
      dispatch(fetchRooms())
    }
  },[roomStatus, dispatch]);

  return (
    <div>
      { roomStatus === 'loading' && <Loading /> }
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

export default Home;

