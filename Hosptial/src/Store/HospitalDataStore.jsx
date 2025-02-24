// Store/HospitalDataStore.js
import { createContext, useState, useEffect } from "react";

export const HospitaldataContext = createContext(); // Yeh naam HospitaldataContext hi hona chahiye

export function HospitalDataProvider({ children }) {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("https://hospital-locator-server.onrender.com");
        const fetchedData = await res.json();
        setData(fetchedData.items);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <HospitaldataContext.Provider value={{ data }}>
      {children}
    </HospitaldataContext.Provider>
  );
}
