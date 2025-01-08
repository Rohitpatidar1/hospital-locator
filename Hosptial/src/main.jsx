import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import Locate from "./pages/Locate_Hosptial/Locate_Hosptial.jsx";
import Locate from "./pages/Locate_Hosptial/Locate_Hosptial.jsx";
import Services from "../src/pages/Services/Services.jsx";
import About from "../src/pages/About/About.jsx";
import Contact from "../src/pages/Contact/Contact.jsx";
import MainHome from "./pages/home/Main_Home.jsx";
import OpenHospitals from "../src/pages/Services/OpenHospitals.jsx";
import LocationBased from "../src/pages/Services/LocationBased.jsx";
import HospitalFacilities from "../src/pages/Services/HospitalFacilities.jsx";
import EmergencyContact from "../src/pages/Services/EmergencyContact.jsx";
import UserFriendlyInterface from "../src/pages/Services/UserFriendlyInterface.jsx";
import EmergencyResponseTime from "../src/pages/Services/EmergencyResponseTime.jsx";
import AmbulanceService from "./pages/Services/AmbulanceService.jsx";
import LayOut from "./layout/Layout.jsx";
// import Location from "./pages/Location/Location.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LayOut />,
    children: [
      {
        path: "", // Updated to remove starting "/"
        element: <MainHome />,
      },
      {
        path: "Locate", // Updated to remove starting "/"
        element: <Locate />,
      },
      {
        path: "Services",
        element: <Services />,
        children: [],
      },
      {
        path: "About",
        element: <About />,
      },
      {
        path: "contact",
        element: <Contact></Contact>,
      },
      {
        path: "/OpenHospitals",
        element: <OpenHospitals></OpenHospitals>,
      },
      {
        path: "/Location-based",
        element: <LocationBased></LocationBased>,
      },
      {
        path: "/HospitalFacilities",
        element: <HospitalFacilities />,
      },
      {
        path: "/EmergencyContact",
        element: <EmergencyContact />,
      },
      {
        path: "/UserFriendlyInterfacel",
        element: <UserFriendlyInterface />,
      },
      {
        path: "/EmergencyResponse",
        element: <EmergencyResponseTime></EmergencyResponseTime>,
      },
      {
        path: "/AmbulanceService",
        element: <AmbulanceService />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
