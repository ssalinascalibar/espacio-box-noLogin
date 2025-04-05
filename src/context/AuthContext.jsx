import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext({});

const AuthContextProvider = ({ children }) => {
    
  const [isAuth, setIsAuth] = useState(false);
  const [isAuthUser, setIsAuthUser] = useState(false);
  const [registeredUser, setRegisteredUser] = useState({});

  const navigate = useNavigate();

  const logOut = () => {
    setIsAuth(false);
    navigate("/")
  };

  const logOutUser = () => {
    setIsAuthUser(false);
    setRegisteredUser("");
    navigate("/")
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
        isAuthUser,
        setIsAuthUser,
        logOutUser,
        registeredUser,
        setRegisteredUser
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContextProvider };
export default AuthContext;
