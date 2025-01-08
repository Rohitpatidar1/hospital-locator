import Locate from "../Locate_Hosptial/Locate_Hosptial";
import { HospitalDataProvider } from "../../Store/HospitalDataStore";
import Services from "../Services/Services";
import About from "../About/About";
import Contact from "../Contact/Contact";

function MainHome() {
  return (
    <>
      <Locate></Locate>
      <Services></Services>
      <About></About>
      <Contact></Contact>
    </>
  );
}

export default MainHome;
