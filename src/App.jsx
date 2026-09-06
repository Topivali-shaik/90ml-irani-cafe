import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Specialities from "./components/Specialities";
import SignatureMenu from "./components/SignatureMenu";
import Story from "./components/Story";
import Gallery from "./components/Gallery";
import Experience from "./components/Experience";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-[#062D27]">
      <Navbar />
      <Hero />
      <Specialities />
      <SignatureMenu />
      <Story />
      <Gallery />
      <Experience />
      <Footer />
    </div>
  );
}

export default App;