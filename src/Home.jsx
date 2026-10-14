import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Menu from "./components/Menu";
import VisitUs from "./components/Location";
import Footer from "./components/Footer";
import CafeStats from "./components/CafeStats";
import OurStory from "./components/Story";
import Experience from "./components/Experience";

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Menu />
      <Experience/>
      <CafeStats/>
      <OurStory/>
      <VisitUs />
      <Footer />
    </>
  );
}

export default Home;
