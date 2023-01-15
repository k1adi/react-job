import axios from 'axios';
const apiKey = process.env.REACT_APP_API_BASEURL;

class JobSource {
  static getJobList = async () => {
    const response = await axios.get(`${apiKey}/positions.json`);
    return response.data;
  }

  static filterJobList = async ({ desc, location, full_time }) => {
    const response = await axios.get(`${apiKey}/positions.json`, {
      params: {
        description: desc,
        location: location,
      }
    });
    return response.data;
  }

  static getDetailJob = async (id) => {
    const response = await axios.get(`${apiKey}/positions/${id}`);
    return response.data;
  }
};

export default JobSource;
