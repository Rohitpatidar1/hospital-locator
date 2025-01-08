import { useContext } from "react";
import { HospitaldataContext } from "../../Store/HospitalDataStore";

function EmergencyContact() {
  const { data } = useContext(HospitaldataContext);

  return (
    <main>
      <p>
        In case of medical emergencies, please use the following contact options
        to reach hospitals directly:
      </p>

      <section className="emergency-contact">
        {data && data.length > 0 ? (
          data.map((item) => (
            <div key={item._id} className="hospital-info">
              <div className="hospital-item">
                <h2>{item.hospital_name}</h2>

                <p>
                  <strong>Contact Number:</strong> {item.contact || "N/A"}
                </p>
                <p>
                  <strong>Distance from your location:</strong>{" "}
                  {item.Estimated || "Not available"}
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
          ))
        ) : (
          <p>No hospital data available</p>
        )}
      </section>

      <p>
        We recommend keeping your location services enabled to help us provide
        the fastest response times and the most accurate hospital suggestions.
      </p>
    </main>
  );
}

export default EmergencyContact;
