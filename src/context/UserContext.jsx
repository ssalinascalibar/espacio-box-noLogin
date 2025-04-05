import { createContext, useState, useEffect } from "react";
import { fetchProfessionals } from "../services/api";

const UserContext = createContext({});

const UserContextProvider = ({ children }) => {
  const [professionals, setProfessionals] = useState([]);
  console.log(professionals);

  useEffect(() => {
    const getUsers = async () => {
      const data = await fetchProfessionals();
      setProfessionals(data);
    };
    getUsers();
  }, []);
  

  return (
    <UserContext.Provider value={{ professionals, setProfessionals }}>
      {children}
    </UserContext.Provider>
  );
};

export { UserContextProvider };
export default UserContext;
