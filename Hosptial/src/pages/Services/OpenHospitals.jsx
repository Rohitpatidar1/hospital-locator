import { useContext } from "react";
import { HospitaldataContext } from "../../Store/HospitalDataStore"; // Correct import of HospitaldataContext

function OpenHospitals() {
  const { data } = useContext(HospitaldataContext);

  return (
    <>
      <div></div>
      <section className="hospitalll-info">
        <h1>Real-Time Information on Open Hospitals</h1>
        <p>
          Here you can find up-to-date information about hospitals that are
          currently open and available for emergency cases.
        </p>

        <h2>Available Hospitals:</h2>
        <div className="hospitalll-list">
          {data &&
            data.map((item) => (
              <div className="hospitalll-card" key={item._id}>
                <img
                  src={item.image}
                  id="image1" // Dynamically display hospital image
                  alt={item.hospital_name || "Hospital Image"}
                  className="hospitalll-image"
                />
                <div className="hospitalll-details">
                  <h3>{item.hospital_name}</h3>
                  <p>Location: {item.location}</p> {/* Dynamic location */}
                  <p>Estimated Time to Reach: {item.Estimated} minutes</p>{" "}
                  {/* Dynamic time */}
                  <p>Contact Number: {item.contact}</p> {/* Dynamic contact */}
                </div>
              </div>
            ))}
        </div>
      </section>
    </>
  );
}

export default OpenHospitals;
