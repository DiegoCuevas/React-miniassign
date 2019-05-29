import React from 'react';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet' ;

function MyMap() {
  const [position, setPosition] = React.useState([0, 0]);
  const zoom = 13;

  React.useEffect(() => {
    console.log("123123");
    const watchID = navigator.geolocation.watchPosition(position => {
      setPosition([position.coords.latitude, position.coords.longitude]);
    });
    return () => navigator.geolocation.clearWatch(watchID);
  },[setPosition]);

  
  return (
    <Map center={position} zoom={zoom}>
      <TileLayer
        attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
      />
      <Marker position={position}>
        <Popup>
          You are here!!
        </Popup>
      </Marker>
    </Map>
  );
}

export default MyMap;