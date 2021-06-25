import "./styles.css";
import WorkLinks from "../WorkLinks";

export default function Header() {
  return (
    <div className="header">
      <WorkLinks />
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </div>
  );
}
