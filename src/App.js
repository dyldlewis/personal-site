import logo from "./logo.svg";
import ProfilePicture from "./components/ProfilePicture";
import Hero from "./components/Hero";
import WorkTiles from "./components/WorkTiles";
import WorkLinks from "./components/WorkLinks";
import Header from "./components/Header";
import Footer from "./components/Footer";
import SkillTiles from "./components/SkillTiles";
import "./App.css";

function App() {
  return (
    <div className="container">
      <Header />
      <ProfilePicture />
      <Hero />
      <WorkTiles />
      <SkillTiles />
      <WorkLinks />
      <Footer />
    </div>
  );
}

export default App;
