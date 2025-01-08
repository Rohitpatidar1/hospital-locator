import { Link } from "react-router-dom";

function Services() {
  return (
    <>
      {/* <!-- hosptial services --> */}
      <main>
        <section class="services">
          <h1>Our Services</h1>
          <div class="services-container">
            <Link to="/OpenHospitals">
              <div class="service-card">
                <h2>Provide Real-Time Information on Open Hospitals</h2>
                <p>
                  Get up-to-date information about hospitals that are currently
                  open and available for emergency cases.
                </p>
              </div>
            </Link>
            <a href="/Location-based">
              <div class="service-card">
                <h2>Enable Location-Based Search</h2>
                <p>
                  Use your current location or search by specific addresses to
                  find the nearest hospital.
                </p>
              </div>
            </a>
            <Link to="/HospitalFacilities">
              <div class="service-card">
                <h2>Display Hospital Facilities and Services</h2>
                <p>
                  Explore the facilities each hospital offers, including special
                  departments, available beds, and ICU availability.
                </p>
              </div>
            </Link>
            <Link to="/EmergencyContact">
              <div class="service-card">
                <h2>Facilitate Emergency Contact</h2>
                <p>
                  Directly contact hospitals through the app for inquiries or
                  emergencies.
                </p>
              </div>
            </Link>

            {/* <Link to="/UserFriendlyInterfacel">
              <div class="service-card">
                <h2>Offer a User-Friendly Interface</h2>
                <p>
                  Our platform is designed to be easy to navigate, ensuring
                  users can quickly find the information they need.
                </p>
              </div>
            </Link>

            <Link to="/EmergencyResponse">
              <div class="service-card">
                <h2>Provide Emergency Response Time</h2>
                <p>
                  Get an estimate of how quickly emergency services can respond
                  based on your location.
                </p>
              </div>
            </Link>

            <Link to="/AmbulanceService">
              <div class="service-card">
                <h2>Expand to Integrate Ambulance Service</h2>
                <p>
                  Coming soon: Book ambulances directly from the app for fast
                  medical transport.
                </p>
              </div>
            </Link> */}
          </div>
        </section>
      </main>
    </>
  );
}
export default Services;
