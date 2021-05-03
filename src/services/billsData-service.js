import axios from 'axios';

class BillsDataService {
  constructor() {
    this.url = 'http://localhost:5000/api/data-bills'; 
  }

  getData = async () => {
    const result = await axios.get(this.url);
    if(result.status < 200 && result.status > 299) {
      throw new Error(`Could not get ${this.url}, status: ${result.status}`);
    }
    return await result.data;
  }

  saveData = async (data) => {
    const result = await axios.post(this.url, data);
    if(result.status < 200 && result.status > 299) {
      throw new Error(`Could not get ${this.url}, status: ${result.status}`);
    }
    return true;
  }
  
}

export default new BillsDataService();