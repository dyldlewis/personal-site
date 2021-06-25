import GitHubLogo from "./GitHub-Mark-Light-64px.png";
import LinkedInLogo from "./linkedIn.png";
import "./styles.css";

export default function WorkLinks() {
  return (
    <div className="workLinks">
      <img className="logo" src={GitHubLogo} />
      <img className="logo" src={LinkedInLogo} />
    </div>
  );
}
