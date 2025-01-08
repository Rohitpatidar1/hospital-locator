function About() {
  return (
    <>
      <main>
        <section className="about">
          <h1>About Us</h1>
          <div className="about-container">
            <div className="about-section">
              <h2>Project Overview</h2>
              <p>
                Our project, "Hospitalocator," is a web-based platform designed
                to help individuals find the nearest emergency hospital during a
                medical crisis. The goal of this project is to bridge the gap in
                accessing emergency medical services, providing real-time
                information about hospitals, their locations, and contact
                details. With a user-friendly interface, this platform makes it
                easy for anyone to find quick medical assistance in critical
                times.
              </p>
            </div>
            <div className="about-section">
              <h2>What Does Our Project Offer?</h2>
              <p>
                The "Hospitalocator" platform offers the following features:
                <ul>
                  <li>
                    <strong>Real-time Hospital Locator:</strong> Find hospitals
                    near you with just a few clicks.
                  </li>
                  <li>
                    <strong>Emergency Contact Information:</strong> Access
                    contact details of hospitals for quick communication.
                  </li>
                  <li>
                    <strong>Navigation Assistance:</strong> Get directions to
                    the nearest emergency hospital with ease.
                  </li>
                  <li>
                    <strong>Comprehensive Search Filters:</strong> Search based
                    on hospital type, services, or emergency facilities.
                  </li>
                  <li>
                    <strong>Emergency Information Database:</strong> Find
                    critical information such as bed availability, doctors on
                    call, and emergency services.
                  </li>
                </ul>
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default About;
