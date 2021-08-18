import { Marker, GoogleMap, useJsApiLoader, withGoogleMap, LoadScript } from "@react-google-maps/api"
import React, { useCallback, useState } from "react"

function MapContainer({ brewLat, brewLng, brewery }) {

  const { isLoaded } = useJsApiLoader({
    id: 'brew-map-script', 
    googleMapsApiKey: 'AIzaSyDFp1mdD7Gn5Jeth2u2kmXFMpVvDtmfNEU'
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

  // const apiKey = 'AIzaSyDFp1mdD7Gn5Jeth2u2kmXFMpVvDtmfNEU'
  const mapStyles = {
    height: '350px', 
    width: '500px' 
  }

  return isLoaded ? (
      <GoogleMap
        zoom={13}
        center={{ 
          lat: parseFloat(brewLat), 
          lng: parseFloat(brewLng) 
        }}
        onLoad={onLoad}
        onUnmount={onUnmount}
        defaultOptions= {{
          scrollwheel: true, 
          mapTypeControl: true, 
          fullscreenControl: false, 
          streetViewControl: true,
        }}
        mapContainerStyle={mapStyles}
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