import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";
import { Outlet } from "react-router-dom";
import "../App.css";
import { HospitalDataProvider } from "../Store/HospitalDataStore";
function LayOut() {
  return (
    <>
      <HospitalDataProvider>
        <Header />
        <Outlet />
        <Footer />
      </HospitalDataProvider>
    </>
  );
}

export default LayOut;
