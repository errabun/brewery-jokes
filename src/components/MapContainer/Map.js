import { Marker, GoogleMap, useJsApiLoader } from "@react-google-maps/api"
import React, { useCallback, useState } from "react"

function MapContainer({ brewLat, brewLng, brewery }) {

  const { isLoaded } = useJsApiLoader({
    id: 'brew-map-script', 
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_API_KEY
  })

  const [map, setMap] = useState(null)

  const onLoad = useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds()
    map.fitBounds(bounds)
    setMap(map)
  }, [])

  const onUnmount = useCallback(function callback(map) {
    setMap(null)
  }, [])

  const mapStyles = {
    height: '350px', 
    width: '500px' 
  }

  const setZoom = 13

  return isLoaded ? (
      <GoogleMap
        zoom={setZoom}
        center={{ 
          lat: brewLat, 
          lng: brewLng 
        }}
        onLoad={onLoad}
        onUnmount={onUnmount}
        defaultOptions= {{
          scrollwheel: true, 
          mapTypeControl: true, 
          fullscreenControl: true, 
          streetViewControl: true,
        }}
        mapContainerStyle={mapStyles}
        key={process.env.REACT_APP_GOOGLE_API_KEY}
      >
        <Marker
          name={brewery.name}
          draggable={false}
          position={{
            lat: brewLat, 
            lng: brewLng 
          }}
        />
        <Marker />
      </GoogleMap>
  ) : <></>
}

export default MapContainer