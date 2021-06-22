import "./styles.css";

const skills = ["React", "CSS", "Bash Scripting", "Postgres", "Node"];
const skillsList = skills.map((skill) => <div>{skill}</div>);

export default function SkillTiles() {
  return <div className="skills">{skillsList}</div>;
}
