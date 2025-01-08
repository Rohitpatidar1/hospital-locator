import React, { useContext, useEffect, useState, useCallback } from "react";
import { GoogleMap, useJsApiLoader, MarkerF } from "@react-google-maps/api";
import { current, target, target2, target3, target4 } from "./locatHelper";
import { api_key } from "./constant";
import { FaMagnifyingGlassLocation } from "react-icons/fa6";
import { HospitaldataContext } from "../../Store/HospitalDataStore";
import LocationBased from "../Services/LocationBased";

function Locate() {
  const { data } = useContext(HospitaldataContext);
  const { isLoaded } = useJsApiLoader({
    id: "google-maps-script",
    googleMapsApiKey: api_key, // Replace with your API key
  });
  const [currentLocation, setCurrentLocation] = useState(current);
  const [clickedMarker, setClickedMarker] = useState(null); // State for clicked marker
  const [distance, setDistance] = useState(null); // State to store the distance

  // Define markers outside of the render flow
  const markers = [
    {
      ...target,
      icon: "https://img.icons8.com/?size=50&id=7880&format=png",
      info: "Indore City",
    },
    {
      ...target2,
      icon: "https://img.icons8.com/?size=50&id=7880&format=png",
      info: "Another City",
    },
    {
      ...target3,
      icon: "https://img.icons8.com/?size=50&id=7880&format=png",
      info: "New City",
    },
    {
      ...target4,
      icon: "https://img.icons8.com/?size=50&id=7880&format=png",
      info: "New City",
    },
    {
      ...currentLocation,
      icon: <FaMagnifyingGlassLocation />, // Use a valid icon URL
      info: "Your Location",
    },
  ];

  // Function to handle geolocation fetching
  const fetchCurrentLocation = useCallback(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setCurrentLocation({
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          });
        },
        (error) => {
          console.error("Error fetching geolocation: ", error);
          // Handle geolocation error appropriately, such as showing a default location or error message.
        }
      );
    } else {
      console.error("Geolocation is not supported by this browser.");
    }
  }, []);

  // Fetch current location on component mount
  useEffect(() => {
    fetchCurrentLocation();
  }, [fetchCurrentLocation]);

  useEffect(() => {
    if (isLoaded) {
      // Create the Distance Matrix Service
      const service = new window.google.maps.DistanceMatrixService();

      service.getDistanceMatrix(
        {
          origins: [{ lat: target.lat, lng: target.lng }],
          destinations: [
            { lat: target2.lat, lng: target2.lng },
            { lat: target3.lat, lng: target3.lng },
            { lat: target4.lat, lng: target4.lng },
          ],
          travelMode: "DRIVING",
        },
        (response, status) => {
          if (status === "OK") {
            const distanceText = response.rows[0].elements[0].distance.text;
            setDistance(distanceText);
          } else {
            console.error("Distance Matrix request failed:", status);
          }
        }
      );
    }
  }, [isLoaded]);

  if (!isLoaded) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <section className="hero">
        <div className="search-container">
          <h1>Locate Nearby Hospitals</h1>
        </div>
      </section>

      <div>
        <GoogleMap
          center={currentLocation}
          zoom={14}
          mapContainerStyle={{ width: "100%", height: "400px" }}
        >
          {markers.map((marker, index) => (
            <MarkerF
              key={index}
              position={{ lat: marker.lat, lng: marker.lng }}
              icon={marker.icon}
              onClick={() => setClickedMarker(index)} // Optimized by directly calling the function
            />
          ))}
        </GoogleMap>

        {clickedMarker !== null && (
          <div
            style={{
              position: "absolute",
              bottom: "20px",
              left: "20px",
              background: "white",
              padding: "5px",
              borderRadius: "5px",
            }}
          >
            {`Hey from ${markers[clickedMarker].info}`}
          </div>
        )}

        {distance && (
          <div
            style={{
              position: "absolute",
              bottom: "50px",
              left: "20px",
              background: "white",
              padding: "10px",
              borderRadius: "5px",
            }}
          >
            {`Distance between ${target.info} and ${target2.info}: ${distance}`}
          </div>
        )}
      </div>
      <LocationBased />
    </>
  );
}

export default Locate;
