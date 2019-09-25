import axios from 'axios';

export default {
  search(query) {
    return axios.get(`https://api.github.com/search/repositories?q=${query}`);
  },
};
