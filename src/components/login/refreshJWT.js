import axios from "axios";

const updateAccessToken = async () => {
  const token = localStorage.getItem('accessToken');
  const refreshToken = localStorage.getItem('refreshToken');
  try {
    const response = await axios.post('User/RefreshToken', { token, refreshToken });

    if (response.status === 200) {
      const newAccessToken = response.data.token;

      // Видалення старого аксес токену з локального сховища
      localStorage.removeItem('accessToken');

      // Додавання нового аксес токену в локальне сховище
      localStorage.setItem('accessToken', newAccessToken);

      // Повернення нового аксес токену
      return newAccessToken;
    }
  } catch (error) {
    console.error('Помилка під час оновлення аксес токену:', error);
    throw error;
  }
};

export default updateAccessToken;