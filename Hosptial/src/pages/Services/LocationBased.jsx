import React, { createContext, useState, useEffect } from "react";

export const HospitaldataContext = createContext();

function HospitalDataProvider({ children }) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://hospital-locator-server.onrender.com")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to fetch data");
        }
        return res.json();
      })
      .then((fetchedData) => {
        setData(fetchedData.items || []);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setError(error.message);
        setLoading(false);
      });
  }, []);

  return (
    <HospitaldataContext.Provider value={{ data, loading, error }}>
      {children}
    </HospitaldataContext.Provider>
  );
}

export default HospitalDataProvider;


// LocationBased.js (Fixed Component)
import React, { useState, useEffect, useContext } from "react";
import { HospitaldataContext } from "../../Store/HospitalDataStore";

function LocationBased() {
  const { data, loading, error } = useContext(HospitaldataContext);
  const [currentLocation, setCurrentLocation] = useState(null);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setCurrentLocation({
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          });
        },
        (error) => {
          console.error("Geolocation error:", error);
        }
      );
    } else {
      console.error("Geolocation is not supported by this browser.");
    }
  }, []);

  const calculateDistance = (lat1, lon1, lat2, lon2) => {
    const R = 6371;
    const dLat = (lat2 - lat1) * (Math.PI / 180);
    const dLon = (lon2 - lon1) * (Math.PI / 180);
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(lat1 * (Math.PI / 180)) *
        Math.cos(lat2 * (Math.PI / 180)) *
        Math.sin(dLon / 2) *
        Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c;
  };

  if (loading) return <p>Loading hospital data...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!currentLocation) return <p>Fetching your location...</p>;

  const nearbyHospitals = data.filter((hospital) => {
    if (!hospital.latitude || !hospital.longitude) return false;
    return (
      calculateDistance(
        currentLocation.lat,
        currentLocation.lng,
        hospital.latitude,
        hospital.longitude
      ) <= 10
    );
  });

  return (
    <main>
      <section className="info">
        <h1>Hospitals Near You</h1>
        <p>Hospitals within a 10 km radius:</p>
      </section>
      <section className="hospital-results">
        <h2>Search Results:</h2>
        <div className="hospital-list">
          {nearbyHospitals.length > 0 ? (
            nearbyHospitals.map((item) => (
              <div key={item.hospital_name} className="hospital-card">
                <div className="hospital-details">
                  <h3>{item.hospital_name}</h3>
                  <p>Location: {item.location || "Not available"}</p>
                  <p>Distance: {calculateDistance(
                    currentLocation.lat,
                    currentLocation.lng,
                    item.latitude,
                    item.longitude
                  ).toFixed(2)} km away</p>
                  <p>Available Services: {item.services || "Not available"}</p>
                  <p><strong>Contact:</strong> {item.contact || "N/A"}</p>
                  <a href={`tel:+${item.contact}`} className="call-btn">Call Now</a>
                </div>
              </div>
            ))
          ) : (
            <p>No nearby hospitals found.</p>
          )}
        </div>
      </section>
    </main>
  );
}

export default LocationBased;
