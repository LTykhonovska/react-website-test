import React from 'react';
import GoogleMapReact from 'google-map-react';
import LocationPin from "./LocationPin";
import styles from './MapSection.module.css';

function MapSection({location, zoomLevel}) {

  return (
    <div className={styles.mapSection}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: 'AIzaSyBh3MapmUbRCA0jKz-JqT029yp2MdTxVM4' }}
        defaultCenter={location}
        defaultZoom={zoomLevel}
      >
        <LocationPin
          lat={location.lat}
          lng={location.lng}
          text={location.address}
        />
      </GoogleMapReact>
    </div>
  );
}

export default MapSection;