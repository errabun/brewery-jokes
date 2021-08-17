import { Marker, GoogleMap, withScriptjs, withGoogleMap, LoadScript } from "@react-google-maps/api"
import React from "react"

function MapContainer() {

  const apiKey = 'AIzaSyDFp1mdD7Gn5Jeth2u2kmXFMpVvDtmfNEU'
  const mapStyles = {
    height: '350px', 
    width: '500px' 
  }

  return (
    <LoadScript
      googleMapsApiKey={apiKey}
    >
      <GoogleMap
        defaultZoom={10}
        defaultCenter={{ lat: 38, lng: 97 }}
        defaultOptions= {{
          scrollwheel: true, 
          mapTypeControl: true, 
          fullscreenControl: false, 
          streetViewControl: true,
        }}
        mapContainerStyle={mapStyles}
      >
        <Marker
          
        />
      </GoogleMap>
    </LoadScript>
  )
}

export default MapContainer