import React from 'react';
import { GoogleMapLoader, GoogleMap } from 'react-google-maps';

export default (props) => {
  return (
    //see react-google-maps documentation for this info
    <GoogleMapLoader
      containerElement={ <div style={{height: '100%'}} /> }
      googleMapElement={
        <GoogleMap defaultZoom={11} defaultCenter={{lat: props.lat, lng: props.lon}} />
      }
    />
  );

}
