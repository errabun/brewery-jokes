import { Marker, GoogleMap, withScriptjs, withGoogleMap, LoadScript } from "@react-google-maps/api"
import React from "react"

function MapContainer() {

  const apiKey = 'AIzaSyDFp1mdD7Gn5Jeth2u2kmXFMpVvDtmfNEU'

  const mapRef = React.useRef(null)
  return (
    <LoadScript
      googleMapsApiKey='AIzaSyDFp1mdD7Gn5Jeth2u2kmXFMpVvDtmfNEU'
    >
      <GoogleMap
        ref={mapRef}
        defaultZoom={10}
        defaultCenter={{ lat: 38, lng: -97 }}
        defaultOptions= {{
          scrollwheel: true, 
          mapTypeControl: true, 
          fullscreenControl: false, 
          streetViewControl: true,
        }}
        mapContainerStyle={{ width: '500px', height: '350px' }}
      >
        {}
      </GoogleMap>
    </LoadScript>
  )
}

export default MapContainer