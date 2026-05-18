import { AuthContext } from "../auth.context";
import { useContext} from "react";
import { login ,register } from "../services/auth.api";


export const useAuth = ()=>{
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within AuthProvider");
  }
  const {loading ,setLoading , user , setUser} = context;

  async function handleLogin(username , password){ 
    setLoading(true);
    const response = await login(username , password);
    setUser(response.user);
    setLoading(false);
  }

  async function handleRgister(username,email , password){
    setLoading(true);
    const response = await register(username , email , password);
    setUser(response.user);
    setLoading(false);
  }


  return{
    handleLogin,
    handleRgister,
    user,
    loading
  }
}
