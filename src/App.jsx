
import { RouterProvider } from "react-router-dom";
import { router } from "./routes/Router";
import { myContext, MyContextProvider } from "./utils/context_api/context";
import { useContext, useEffect } from "react";

function App() {

  const { setUserData,userData,setIsLogin,setUserType } =
    useContext(myContext);

  useEffect(() => {
    const authData = JSON.parse(localStorage.getItem('userData'));

    if(authData){
      setUserData(authData)
      setUserType(authData.userRole)
      setIsLogin(true)
    }else{
      localStorage.clear()
      setIsLogin(false)
    }
  }, []);

  return (
        <RouterProvider router={router} />
  );
}

export default App;
