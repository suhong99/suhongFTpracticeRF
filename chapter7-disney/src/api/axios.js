import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  params: {
    api_key: '5d218d9740dc9b00f3016582530b10eb',
    language: 'ko-KR',
  },
});

export default instance;
