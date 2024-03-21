import { useAtom, useAtomValue } from 'jotai';
import React, { useCallback } from 'react';
import { mapAtom } from '../atoms/map';
import { infosAtom, selectInfoAtom } from '../atoms/info';
import { Info } from '../types/info';
import Marker from './common/Marker';
import InfoWindow from './common/InfoWindow';
import { useMutation } from 'react-query';
import { createInfo } from '../apis/infos';
import { HttpCode } from '../types/httpCode';
import { AxiosError } from 'axios';

interface MarkersContainerProps {
  type?: 'home' | 'upload';
}

const MarkersContainer = ({ type = 'home' }: MarkersContainerProps) => {
  const map = useAtomValue(mapAtom);
  const infos = useAtomValue(infosAtom);
  const [selectInfo, setSelectInfo] = useAtom(selectInfoAtom);

  const { mutate } = useMutation(createInfo, {
    onSuccess: () => {
      alert('저장 성공!');
    },
    onError: (error: AxiosError) => {
      const errorStatus = error.response?.status;

      if (errorStatus === HttpCode.CONFLICT) alert('중복된 데이터 입니다.');
      else alert('서버 에러!');
    },
  });

  const onSubmit = useCallback(() => {
    if (!selectInfo) return;

    mutate(selectInfo);
  }, [selectInfo]);

  if (!map || !infos) return null;

  return (
    <>
      {infos?.map((info: Info) => (
        <Marker
          key={info.id}
          map={map}
          position={info.position}
          content={`<div class="marker" />`}
          onClick={() => {
            setSelectInfo(info);
            map.panTo(info.position);
          }}
        />
      ))}

      {selectInfo && (
        <Marker
          key={selectInfo.id}
          map={map}
          position={selectInfo.position}
          content={`<div class="marker select" />`}
          onClick={() => {
            setSelectInfo(null);
          }}
        />
      )}

      <InfoWindow
        map={map}
        selectInfo={selectInfo}
        onSubmit={type === 'upload' ? onSubmit : undefined}
      />
    </>
  );
};

export default MarkersContainer;
