import { createContext, useState, useEffect, useRef } from "react";
import { fetchProfessionals } from "../services/api";

const UserContext = createContext({});

const UserContextProvider = ({ children }) => {
  const [professionals, setProfessionals] = useState([]);
  console.log('professionales', professionals);
  const prevProfessionalsRef = useRef();
  console.log('profesionales previos', prevProfessionalsRef.current);

  useEffect(() => {
    const getUsers = async () => {
      const data = await fetchProfessionals();

      if (!prevProfessionalsRef.current || prevProfessionalsRef.current !== data) {
        setProfessionals(data);
        prevProfessionalsRef.current = data; 
      }
    };

    // Llamar a la función para obtener usuarios
    getUsers();
  }, []);
  
//   useEffect(() => {
//     const getUsers = async () => {
//       const data = await fetchProfessionals();
//       setProfessionals(data);
//     };
//     getUsers();
//   }, []);
  

  return (
    <UserContext.Provider value={{ professionals, setProfessionals }}>
      {children}
    </UserContext.Provider>
  );
};

export { UserContextProvider };
export default UserContext;
