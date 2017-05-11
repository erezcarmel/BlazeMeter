import axios from 'axios';
const DATA_LOCATION = './sidebar.json';

class DataLoader {
  get() {
    return axios.get(DATA_LOCATION);
  }
}

export default new DataLoader();
