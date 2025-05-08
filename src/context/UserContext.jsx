import { createContext, useState, useEffect, useRef } from "react";
import { fetchProfessionals } from "../services/api";
import { fetchReservations } from "../services/api";

const UserContext = createContext({});

const UserContextProvider = ({ children }) => {
  const [professionals, setProfessionals] = useState([]);
  const [reservations, setReservations] = useState([]);
  console.log("reservations", reservations)
  const prevProfessionalsRef = useRef();
  const prevReservationsRef = useRef();

  useEffect(() => {
    const getUsers = async () => {
      const data = await fetchProfessionals();

      if (!prevProfessionalsRef.current || prevProfessionalsRef.current !== data) {
        setProfessionals(data);
        prevProfessionalsRef.current = data; 
      }
    };
    getUsers();
  }, []);

  useEffect(() => {
    const getReservations = async () => {
      const data = await fetchReservations();

      if (!prevReservationsRef.current || prevReservationsRef.current !== data) {
        setReservations(data);
        prevReservationsRef.current = data; 
      }
    };
    getReservations();
  }, []);
  
//   useEffect(() => {
//     const getUsers = async () => {
//       const data = await fetchProfessionals();
//       setProfessionals(data);
//     };
//     getUsers();
//   }, []);
  

  return (
    <UserContext.Provider value={{ professionals, setProfessionals, reservations, setReservations }}>
      {children}
    </UserContext.Provider>
  );
};

export { UserContextProvider };
export default UserContext;
