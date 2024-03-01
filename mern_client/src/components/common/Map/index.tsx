import React, { useEffect } from 'react';

interface MapProps {
  width: string;
  height: string;
  initMap?: (map: naver.maps.Map) => void;
}

function Map({ width, height, initMap }: MapProps) {
  useEffect(() => {
    var mapOptions = {
      center: new naver.maps.LatLng(37.3595704, 127.105399),
      zoom: 10,
    };

    var map = new naver.maps.Map('map', mapOptions);
    if (typeof initMap === 'function') initMap(map);
  }, []);

  return (
    <div id="map" style={{ width, height }}>
      Map
    </div>
  );
}

export default Map;
