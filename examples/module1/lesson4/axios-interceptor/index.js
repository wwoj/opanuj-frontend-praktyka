import axios from 'axios';

const reqisterStartDate = (config) => {
  config.metadata = { startDate: new Date() };
  return config;
};

const reqisterEndDate = (response) => {
  const {
    config: { url, metadata },
  } = response;
  const elapsedTime = new Date() - metadata.startDate;
  console.log(`Request to ${url} took ${elapsedTime}ms`);

  return response;
};
// Add a request interceptor
axios.interceptors.request.use(reqisterStartDate);

// Add a response interceptor
axios.interceptors.response.use(reqisterEndDate);

const { data } = await axios.get('/api/data/articles?timeout=3000');

document.querySelector('#data').innerHTML = data[0].content;
