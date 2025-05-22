import axios from 'axios';
import toast from 'react-hot-toast';
import { BASE_URL } from '../../config';
// create an axios instance
const service = axios.create({
    baseURL: BASE_URL
  });

  // const navigate = useNavigate()

  const refreshToken = localStorage.getItem('refreshToken');

  const GenerateAccessToken = async () => {
    // Call your token refresh endpoint
    try {
      const response = await axios.post(`${BASE_URL}V1/customer/refresh-token`,{
        "refreshToken": localStorage.getItem('refreshToken')
    })
    localStorage.setItem('accessToken', response.data?.data[0]?.accessToken)
    localStorage.setItem('refreshToken', response.data?.data[0]?.refreshToken)
    return response.data?.data[0]?.accessToken;
    } catch (error) {
      if(error.response?.status === 401){
        localStorage.clear();
        window.location.href="/"
      }
    }
  };

  const retryRequest = async (error) => {
    const originalRequest = error.config;
  
    // Only retry the request if the token refresh is in progress
    if (!originalRequest._retry) {
      originalRequest._retry = true;
  
      try {
        const newToken = await GenerateAccessToken();
        originalRequest.headers['Authorization'] = `Bearer ${newToken}`;
        return service(originalRequest);
      } catch (refreshError) {
        return Promise.reject(refreshError);
      }
    }
    return Promise.reject(error);
  };

  // request interceptor do something before request is sent
service.interceptors.request.use(
    (config) => {
      let accessToken = localStorage.getItem('accessToken');
      config.headers = {
        'content-type': 'application/json',
        Accept: 'application/json',
        Authorization: accessToken ? 'Bearer ' + accessToken : null
      };
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

// response interceptor
service.interceptors.response.use(
    (response) => {
      return response.data;
    },
    (error) => {
      if (error.response.status === 401) {       
        return retryRequest(error);
      }
      return Promise.reject(error);
    }
  );
  
  export default service;
