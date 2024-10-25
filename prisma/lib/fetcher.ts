import axios from "axios";

const fetcher = (url: string) => {
  return axios.get(url, {
    headers: {
      'Cache-Control': 'no-cache', 
      'Pragma': 'no-cache',
      'Expires': '0'
    }
  }).then((res) => res.data);
};

export default fetcher;
