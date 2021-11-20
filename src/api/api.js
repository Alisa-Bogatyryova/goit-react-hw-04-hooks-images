import axios from 'axios';

const apiKey = '4721358-13c427133c953f3e48d1d506d';
const perPage = 12;
const baseURL = `https://pixabay.com/api/?key=${apiKey}&image_type=photo&orientation=horizontal&per_page=${perPage}&q=`;

const fetchImg = ({ query = '', currentPage = 1 }) => {
  const url = `${baseURL}${query}&page=${currentPage}`;
  return axios.get(url).then(({ data }) => data.hits);
};

export default fetchImg;