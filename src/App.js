import logo from "./logo.svg";
import ProfilePicture from "./components/ProfilePicture";
import Hero from "./components/Hero";
import "./App.css";

function App() {
  return (
    <div className="container">
      <ProfilePicture />
      <Hero />
    </div>
  );
}

export default App;
