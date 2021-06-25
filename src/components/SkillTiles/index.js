import "./styles.css";

const skills = [
  "Javascript",
  "React.js",
  "Node.js",
  "CSS3",
  "HTML5",
  "GraphQL",
  "Bash Scripting",
  "Postgres",
];
const skillsList = skills.map((skill) => <div>{skill}</div>);

export default function SkillTiles() {
  return (
    <div className="pageContainer">
      <h1>Skills</h1>
      <div className="skills">{skillsList}</div>
    </div>
  );
}
