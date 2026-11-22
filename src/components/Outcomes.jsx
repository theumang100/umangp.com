import { outcomes } from "../content.js";

function Outcomes() {
  return (
    <section className="outcomes-section" aria-label="Selected outcomes">
      <div className="wrap">
        <ul className="outcomes">
          {outcomes.map((item) => (
            <li key={item.value}>
              <span className="outcome-value">{item.value}</span>
              <span className="outcome-label">{item.label}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Outcomes;
