import React, { useState, useEffect, useContext } from "react";
import { HospitaldataContext } from "../../Store/HospitalDataStore";

function LocationBased() {
  const { data } = useContext(HospitaldataContext);

  const [currentLocation, setCurrentLocation] = useState(null);

  useEffect(() => {
    // Get the current position of the user
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        setCurrentLocation({
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        });
      });
    } else {
      console.error("Geolocation is not supported by this browser.");
    }
  }, []);

  const calculateDistance = (lat1, lon1, lat2, lon2) => {
    const R = 6371; // Earth's radius in kilometers
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

  if (!currentLocation) {
    return <p>Your location is loading...</p>;
  }

  const hospitalData = [...(data || [])];

  const nearbyHospitals = hospitalData.filter((hospital) => {
    const distance = calculateDistance(
      currentLocation.lat,
      currentLocation.lng,
      hospital.latitude,
      hospital.longitude
    );
    return distance <= 10; // 10 km radius
  });

  return (
    <main>
      <section className="info">
        <h1>Hospitals Near You</h1>
        <p>
          Based on your current location, here are the hospitals within a 10 km
          radius. Select a hospital to view more details or get directions.
        </p>
      </section>

      <section className="hospital-results">
        <h2>Search Results:</h2>

        <div className="hospital-list">
          {nearbyHospitals.length > 0 ? (
            nearbyHospitals.map((item) => {
              const distance = calculateDistance(
                currentLocation.lat,
                currentLocation.lng,
                item.latitude,
                item.longitude
              );
              return (
                <div key={item.hospital_name} className="hospital-card">
                  <div className="hospital-details">
                    <h3>{item.hospital_name}</h3>
                    <p>Location: {item.location || "Not available"}</p>
                    <p>Distance: {distance.toFixed(2)} km away</p>
                    <p>
                      Available Services: {item.services || "Not available"}
                    </p>
                    <p>
                      <strong>Contact Number:</strong> {item.contact || "N/A"}
                    </p>
                    <a
                      href={`tel:+${item.contact}`}
                      className="call-btn"
                      aria-label={`Call ${item.hospital_name}`}
                    >
                      Call Now
                    </a>
                  </div>
                </div>
              );
            })
          ) : (
            <p>No nearby hospitals found within 10 km.</p>
          )}
        </div>
      </section>
    </main>
  );
}

export default LocationBased;
