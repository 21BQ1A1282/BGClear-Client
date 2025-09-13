import { useAuth } from "@clerk/clerk-react";
import axios from "axios";
import { createContext, useState } from "react";
import toast from "react-hot-toast";

export const AppContext = createContext();

const AppContextProvider = ({ children }) => {
  const backendUrl = import.meta.env.VITE_BACKEND_URL;
  const [credit, setCredit] = useState(false);
  const {getToken} = useAuth();

  const loadUserCredits = async () => {
    try{
      const token = await getToken();
      const response = await axios.get(backendUrl+"/users/credits", {headers: {Authorization: `Bearer ${token}`}});
      if(response.data.success){
        setCredit(response.data.data.credits);
      }else{
        toast.error("Error loading credits");
      }
    }catch( error){
      toast.error("Error loading credits");
    }
  }


  const contextValue = {
    credit,setCredit,
    backendUrl,
    loadUserCredits,
  };

  return (
    <AppContext.Provider value={contextValue}>
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
