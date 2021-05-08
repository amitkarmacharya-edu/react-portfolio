import axios from 'axios';

export default {
  getTechStack: function() {
    return axios.get('/api/techstack');
  },
}
