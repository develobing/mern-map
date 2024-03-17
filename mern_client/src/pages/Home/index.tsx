import { useSetAtom } from 'jotai';
import { infosAtom } from '../../atoms/info';
import { infos } from '../../data/infos';
import MapContainer from '../../components/MapContainer';
import Navigation from '../../components/Navigation';
import MarkersContainer from '../../components/MarkersContainer';
import { useEffect } from 'react';

function Home() {
  const setInfos = useSetAtom(infosAtom);

  useEffect(() => {
    if (infos) {
      setInfos(infos);
    }
  }, []);

  return (
    <>
      <Navigation />
      <MapContainer />
      <MarkersContainer />
    </>
  );
}

export default Home;
