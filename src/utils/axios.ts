import Axios, { AxiosInstance } from "axios";

export const baseURL = "https://discord.com/api/v9";

const axios: AxiosInstance = Axios.create({
  baseURL,
  timeout: 20 * 1e3,
  method: "GET",
});

/**前置攔截 */
axios.interceptors.request.use(
  (config) => config,
  (error) => Promise.reject(error)
);

/**後置攔截 */
axios.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && error.response.data)
      console.error(
        `[Axios Error]`,
        `Code: ${error.response.status}, Message: ${error.response.data.message}`
      );
    else console.error(error);
    return Promise.reject(error);
  }
);

export default axios;
