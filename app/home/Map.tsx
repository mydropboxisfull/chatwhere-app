'use client'

import React, { useRef, useState } from 'react'
import ReactMapGL, {Marker, Popup, ViewState} from 'react-map-gl';
import SearchBox from './SearchBox';



function Map() {




    const [viewport, setViewport] = useState({
        width: '100%',
        height: '100%',
        latitude: 29.1918,
        longitude: -81.0741,
        zoom: 17,
        pitch: 0,
        bearing: 0,
      });
  
    return (
      <ReactMapGL
        mapStyle='mapbox://styles/benforest/cldr5o8xa000701lceo5nxy0k'
        mapboxAccessToken={process.env.mapbox_key}
        {...viewport}

        // Test to see if this works without 'Max Update Depth Exceeded' error

        // onMove={({ viewState }) => setViewport(viewState)}

        // Until then, this works!!!

        onMove={({ viewState }) => {
            const { width, height, latitude, longitude, zoom } = viewState;
            setViewport({ width, height, latitude, longitude, zoom });
          }}
      >
      </ReactMapGL>
    );
  }

export default Map