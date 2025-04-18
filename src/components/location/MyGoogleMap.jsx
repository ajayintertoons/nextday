import React from 'react';
import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api';
import { MY_GOOGLE_MAPS_API_KEY } from '../../../config';

const mapContainerStyle = {
  width: '100%',
  height: '400px', // You can adjust the height as needed
};

const center = {
  lat: 37.7749,  // Default latitude (example: San Francisco)
  lng: -122.4194, // Default longitude
};

const options = {
  disableDefaultUI: true,
  zoomControl: true,
};

const MyGoogleMap = ({ latitude, longitude }) => {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: "AIzaSyD_M5QYY_seLbsWsWtVtZRSpCFYUxjRoeI", 
  });

  if (loadError) return <div>Error loading maps</div>;
  if (!isLoaded) return <div>Loading Maps...</div>;

  return (
    <GoogleMap
      mapContainerStyle={mapContainerStyle}
      zoom={14}
      center={{ lat: latitude, lng: longitude }}
      options={options}
    >
      <Marker position={{ lat: latitude, lng: longitude }} />
    </GoogleMap>
  );
};

export default MyGoogleMap;
