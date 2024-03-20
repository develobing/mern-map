import axios from 'axios';
import { HttpException } from '../middlewares/errorHandler';
import { HttpCode } from '../types/httpCode';
import { SearchResponse } from '../types/search';

export default {
  searchKeyword: async (keyword: string) => {
    try {
      const result = await axios.get<SearchResponse>(
        encodeURI(`https://dapi.kakao.com/v2/local/search/keyword?query=${keyword}`),
        {
          headers: {
            Authorization: `KakaoAK ${process.env.KAKAO_API_KEY}`,
          },
        }
      );

      const infos = result.data.documents.map((info) => ({
        id: Number(info.id),
        placeName: info.place_name,
        addressName: info.address_name,
        position: {
          lat: Number(info.y),
          lng: Number(info.x),
        },
      }));

      return infos;
      console.log(result.data);
    } catch (error) {
      console.log('searchKeyword() - error', error);
      throw new HttpException(HttpCode.INTERNAL_SERVER_ERROR, '서버에러');
    }
  },
};
