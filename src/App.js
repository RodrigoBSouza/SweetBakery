import Banner from "./components/Banner";
import Contatcs from "./components/Contacts";
import Footer from "./components/Footer";
import Header from "./components/Header";
import SectionAbout from "./components/SectionAbout";
import SectionMenu from "./components/SectionMenu";

function App() {
  return (
    <div>
      <Header/>
      <Banner/>
      <SectionAbout/>
      <SectionMenu/>
      <Contatcs/>
      <Footer/>
    </div>
  );
}

export default App;
