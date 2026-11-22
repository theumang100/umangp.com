import { outcomes } from "../content.js";

function Outcomes() {
  return (
    <div className="smallinfo_container" aria-label="Selected outcomes">
      <div className="container">
        <h1>Selected outcomes.</h1>
        <ul>
          {outcomes.map((item) => (
            <li key={item.value}>
              <b>{item.value}</b> {item.label}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Outcomes;
