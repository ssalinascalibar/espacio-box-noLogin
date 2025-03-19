import { createContext, useState } from "react";

const AuthContext = createContext({});

const AuthContextProvider = ({ children }) => {
    
  const [isAuth, setIsAuth] = useState(false);
  console.log(isAuth)

  const logOut = () => {
    setIsAuth(false);
  };

/* esta opción es para persistir al admin logeado*/
  // const [isAuth, setIsAuth] = useState(() => {
  //   const storedAuth = localStorage.getItem("isAuth");
  //   return storedAuth === "true";
  // });

  // useEffect(() => {
  //   localStorage.setItem("isAuth", isAuth);
  // }, [isAuth]);

  // const PrivateRoutes = ({ auth: {isAuth}, children }) => {
  //   // let auth = {'token':false}

  //       return isAuth? children : <Navigate to="/login" />
  //       // isAuth ? <Outlet/> : <Navigate to="/login"/>

  // };

  return (
    <AuthContext.Provider
      value={{
        isAuth,
        setIsAuth,
        logOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContextProvider };
export default AuthContext;
