import logo from "./logo.svg";
import ProfilePicture from "./components/ProfilePicture";
import Hero from "./components/Hero";
import WorkTiles from "./components/WorkTiles";
import WorkLinks from "./components/WorkLinks";
import Header from "./components/Header";
import "./App.css";

function App() {
  return (
    <div className="container">
      <Header />
      <ProfilePicture />
      <Hero />
      <WorkTiles />
      <WorkLinks />
    </div>
  );
}

export default App;
