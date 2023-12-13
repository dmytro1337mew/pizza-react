import axios from "axios";
import useAuth from "./useAuth";

const useRefreshToken = () => {
  const accessToken = localStorage.getItem('accessToken');
    const refreshToken = localStorage.getItem('refreshToken');
  const { setAuth } = useAuth;

  const refresh = async () => {
    const response = await axios.post('/refreshToken', {
      accessToken, refreshToken
    });
  }
  return <div></div>; 
}

export default useRefreshToken;