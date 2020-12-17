import React from 'react';
import cx from 'classnames';
import  { ReactComponent as WifiIcon } from 'assets/svg/amenity_wifi.svg';
import  { ReactComponent as TelevisionIcon } from 'assets/svg/amenity_television.svg';
import  { ReactComponent as ViewIcon } from 'assets/svg/amenity_great_view.svg';
import  { ReactComponent as BreakfastIcon } from 'assets/svg/amenity_breakfast.svg';
import  { ReactComponent as AirIcon } from 'assets/svg/amenity_air_conditioner.svg';
import  { ReactComponent as SmokeIcon } from 'assets/svg/amenity_smoke.svg';
import  { ReactComponent as BarIcon } from 'assets/svg/amenity_mini_bar.svg';
import  { ReactComponent as RefrigeratorIcon } from 'assets/svg/amenity_refrigerator.svg';
import  { ReactComponent as ChildIcon } from 'assets/svg/amenity_child_friendly.svg';
import  { ReactComponent as ServiceIcon } from 'assets/svg/amenity_room_service.svg';
import  { ReactComponent as SofaIcon } from 'assets/svg/amenity_sofa.svg';
import  { ReactComponent as PetIcon } from 'assets/svg/amenity_pet_friendly.svg';
import './roomAmenity.scss';


const RoomAmenity = ({ amenities }) => {
  return (
    <section className="row amenity">
      <div className={cx("col-6 col-md-4 d-flex my-3", { disable: !amenities['Wi-Fi'] })}>
        <WifiIcon className="amenity-icon mr-3" />
        <div>Wi-Fi</div>
      </div>
      <div className={cx("col-6 col-md-4 d-flex my-3", { disable: !amenities['Television'] })}>
        <TelevisionIcon className="amenity-icon mr-3" />
        <div>電視</div>
      </div>
      <div className={cx("col-6 col-md-4 d-flex my-3", { disable: !amenities['Great-View'] })}>
        <ViewIcon className="amenity-icon mr-3" />
        <div>漂亮的視野</div>
      </div>
      <div className={cx("col-6 col-md-4 d-flex my-3", { disable: !amenities['Breakfast'] })}>
        <BreakfastIcon className="amenity-icon mr-3" />
        <div>早餐</div>
      </div>
      <div className={cx("col-6 col-md-4 d-flex my-3", { disable: !amenities['Air-Conditioner'] })}>
        <AirIcon className="amenity-icon mr-3" />
        <div>空調</div>
      </div>
      <div className={cx("col-6 col-md-4 d-flex my-3", { disable: !amenities['Smoke-Free'] })}>
        <SmokeIcon className="amenity-icon mr-3" />
        <div>禁止吸煙</div>
      </div>
      <div className={cx("col-6 col-md-4 d-flex my-3", { disable: !amenities['Mini-Bar'] })}>        
        <BarIcon className="amenity-icon mr-3" />
        <div>Mini Bar</div>
      </div>
      <div className={cx("col-6 col-md-4 d-flex my-3", { disable: !amenities['Refrigerator'] })}>
        <RefrigeratorIcon className="amenity-icon mr-3" />
        <div>冰箱</div>
      </div>
      <div className={cx("col-6 col-md-4 d-flex my-3", { disable: !amenities['Child-Friendly'] })}>
        <ChildIcon className="amenity-icon mr-3" />
        <div>適合兒童</div>
      </div>
      <div className={cx("col-6 col-md-4 d-flex my-3", { disable: !amenities['Room-Service'] })}>
        <ServiceIcon className="amenity-icon mr-3" />
        <div>Room Servicer</div>
      </div>
      <div className={cx("col-6 col-md-4 d-flex my-3", { disable: !amenities['Sofa'] })}>
        <SofaIcon className="amenity-icon mr-3" />
        <div>沙發</div>
      </div>
      <div className={cx("col-6 col-md-4 d-flex my-3", { disable: !amenities['Pet-Friendly'] })}>
        <PetIcon className="amenity-icon mr-3" />
        <div>寵物攜帶</div>
      </div>
    </section>
  );
};

export default RoomAmenity;