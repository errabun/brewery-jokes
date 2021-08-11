import { Marker, GoogleMap, withScriptjs, withGoogleMap } from "@react-google-maps/api"
import React from "react"

function MapContainer() {

  const apiKey = 'AIzaSyDFp1mdD7Gn5Jeth2u2kmXFMpVvDtmfNEU'

  const mapRef = React.useRef(null)
  return (
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
    >
      {}
    </GoogleMap>
  )
}

export default MapContainer