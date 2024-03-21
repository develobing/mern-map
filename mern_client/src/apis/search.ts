import axios from 'axios';
import { Info } from '../types/info';

export const searchKeyword = (keyword: string) => {
  return axios.get<{ message: string; data: Info[] }>(
    `/api/search?keyword=${keyword}`
  );
};
