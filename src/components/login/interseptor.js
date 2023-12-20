import updateAccessToken from "./refreshJWT";
import axios from 'axios';

let isRefreshing = false;
let refreshSubscribers = [];

const subscribeTokenRefresh = (callback) => {
  refreshSubscribers.push(callback);
};

const onRefreshed = (token) => {
  refreshSubscribers.forEach((callback) => callback(token));
  refreshSubscribers = [];
};

axios.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    if (error.response.status === 401 && !isRefreshing) {
      isRefreshing = true;

      try {
        const refreshToken = localStorage.getItem('refreshToken');

        if (refreshToken) {
          const newAccessToken = await updateAccessToken(refreshToken);

          if (newAccessToken) {
            // Оновлення заголовка з новим аксес токеном
            originalRequest.headers['Authorization'] = `Bearer ${newAccessToken}`;

            // Повторення оригінального запиту знову з оновленим токеном
            return axios(originalRequest);
          }
        }
      } catch (refreshError) {
        console.error('Помилка під час оновлення токенів:', refreshError);
      } finally {
        isRefreshing = false;
      }
    }

    return Promise.reject(error);
  }
);

export { subscribeTokenRefresh, onRefreshed };
