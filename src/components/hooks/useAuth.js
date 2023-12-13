import { useContext } from "react";
import AuthContext from "../login/AuthProvider";

const useAuth=()=>{
  return useContext(AuthContext);
}

export default useAuth;