import MapContainer from '../../components/MapContainer';
import MarkersContainer from '../../components/MarkersContainer';
import Navigation from '../../components/Navigation';

function Upload() {
  return (
    <>
      <Navigation type="upload" />
      <MapContainer />
      <MarkersContainer />
    </>
  );
}

export default Upload;
