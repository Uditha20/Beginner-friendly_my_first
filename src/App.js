import Cards from "./components/Cards";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Newsletter from "./components/Newsletter";
import Static from "./components/Static";

function App() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Static/>
      <Newsletter/>
      <Cards/>
      <Footer/>
      
    </div>
  );
}

export default App;
