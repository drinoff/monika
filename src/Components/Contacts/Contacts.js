import React from 'react';
import { MapContainer, TileLayer} from 'react-leaflet';
import { Marker, Popup } from 'react-leaflet';
import './Contacts.css';

const Contacts = () => {
  return (
    <>
      <div id="map">
        <MapContainer
          style={{ height: '300px', width: '50%' }}
          center={[42.633516, 23.377342]}
          zoom={23}
          scrollWheelZoom={false}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={[42.633516, 23.377342]}>
            <Popup>FA MultiPolis - Отоплителни системи</Popup>
          </Marker>
        </MapContainer>
      </div>

      <div className="contactsContainer">
        <h3>Контакти:</h3>
        <div className="contactInfoWrapper">
          <p className='contactProp'>Емайл:</p>
          <span>Fa.multipolis@gmail.com</span>
        </div>
        <div className="contactInfoWrapper">
          <p className='contactProp'>Офис:</p>
          <span>+359 877 738 748</span>
        </div>
        <div className="contactInfoWrapper">
          <p className='contactProp'>Техническа поддръжка:</p>
          <span>+359 894 306 405</span>
        </div>
        <div className="contactInfoWrapper">
          <p>{'                  '}</p>
          <span>+359 887 031 636</span>
        </div>
      </div>
    </>
  );
};

export default Contacts;
