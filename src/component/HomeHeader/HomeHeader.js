import React from 'react';
import { ReactComponent as FBIcon } from 'assets/svg/brand_facebook.svg';
import { ReactComponent as IGIcon } from 'assets/svg/brand_instagram.svg';
import { ReactComponent as PhoneIcon } from 'assets/svg/icon_phone.svg';
import { ReactComponent as MailIcon } from 'assets/svg/icon_mail.svg';
import { ReactComponent as HomeIcon } from 'assets/svg/icon_home.svg';
import './homeHeader.scss';

const homeHeader = ({ room }) => {
  const bgImage = room ? { backgroundImage : `url(${room.imageUrl})`} : null ;
  return (
    <header className="container-fluid header-bg" style= { bgImage }>
      <div className="header">
        <div className="header-title">
          <h1>SKY <br/> Hotel</h1>
        </div>
        <div className="header-body mt-5">
          <div className="mr-5">
            <IGIcon className="band-size mr-2" />
            <FBIcon className="band-size" />
          </div>
          <div className="d-flex flex-column">
            <div className="d-flex align-items-center">
              <PhoneIcon className="icon-size mr-3" />
              <div>06-226937</div>
            </div>
            <div className="d-flex align-items-center">
              <MailIcon className="icon-size mr-3" />
              <div>skyhotel@skyhotel.com.tw</div>
            </div>
            <div className="d-flex align-items-center">
              <HomeIcon className="icon-size mr-3" />
              <div>台南市神農路六段8號</div>
            </div>   
          </div>
        </div>
      </div>
    </header>
  );
}

export default homeHeader;