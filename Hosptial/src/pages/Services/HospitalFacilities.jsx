import { useContext } from "react";
import { HospitaldataContext } from "../../Store/HospitalDataStore";

function HospitalFacilities() {
  const { data } = useContext(HospitaldataContext);

  return (
    <>
      <main>
        <section>
          <h1>Hospital Facilities and Services</h1>
          <p>
            Here, you can find detailed information about various hospitals
            including facilities, services, timings, and more.
          </p>

          <div className="hospitall">
            {/* Loop through the hospital data and display details */}
            {data && data.length > 0 ? (
              data.map((item, index) => (
                <div key={index} className="hospital-itemm">
                  <h2>{item.hospital_name}</h2>
                  <p>
                    <strong>Timings:</strong> {item.Timings || "Not available"}
                  </p>
                  <p>
                    <strong>Ambulance Available:</strong>{" "}
                    {item.Ambulance || "Not available"}
                  </p>
                  <p>
                    <strong>Available Doctors:</strong>{" "}
                    {item.Doctors || "Not available"}
                  </p>
                  <p>
                    <strong>Facilities:</strong>{" "}
                    {item.Services || "Not available"}
                  </p>
                  <p>
                    <strong>Home Services:</strong>{" "}
                    {item.Home || "Not available"}
                  </p>
                </div>
              ))
            ) : (
              <p>No hospital data available.</p>
            )}
          </div>
        </section>
      </main>
    </>
  );
}

export default HospitalFacilities;
