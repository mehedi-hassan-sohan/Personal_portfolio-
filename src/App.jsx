import GetTouch from "./GetTouch";
import Banner from "./Banner";
import Footer from "./Footer";
import NavBar from "./Navbar";
import Project from "./Project";
import Services from "./Services";
import Skill from "./Skill";


const App = () => {
  return ( 
    <div>
      <NavBar></NavBar>
      <Banner></Banner>
      <Services></Services>
      <Skill></Skill> 
      <Project></Project> 

      <GetTouch></GetTouch>
      <Footer></Footer>

    </div>
  );
};

export default App;