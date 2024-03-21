import { useSetAtom } from 'jotai';
import { useQuery } from 'react-query';
import { infosAtom } from '../../atoms/info';
import MapContainer from '../../components/MapContainer';
import Navigation from '../../components/Navigation';
import MarkersContainer from '../../components/MarkersContainer';
import { getInfos } from '../../apis/infos';

function Home() {
  const setInfos = useSetAtom(infosAtom);
  const { status } = useQuery('infos', getInfos, {
    select: (result) => result.data.data,
    onSuccess: (infos) => {
      setInfos(infos);
    },
  });

  if (status === 'loading') return <></>;

  return (
    <>
      <Navigation />
      <MapContainer />
      <MarkersContainer />
    </>
  );
}

export default Home;
