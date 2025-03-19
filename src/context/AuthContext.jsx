import { createContext, useState } from "react";

const AuthContext = createContext({});
const AuthContextProvider = ({ children }) => {
  const [isAuth, setisAuth] = useState(false);
  

  const logOut = () => {
    setisAuth(false)
    
  }
  
  // const PrivateRoutes = ({ auth: {isAuth}, children }) => {
  //   // let auth = {'token':false}

  //       return isAuth? children : <Navigate to="/login" />
  //       // isAuth ? <Outlet/> : <Navigate to="/login"/>

  // };

  return (
    <AuthContext.Provider
      value={{
        isAuth,
        setisAuth,
        logOut
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContextProvider };
export default AuthContext;