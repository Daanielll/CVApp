import "../styles/expForm.css";
import { useState } from "react";
export function ExpandableForm({ title = "No title", forms = [""] }) {
  const [expanded, setExpanded] = useState(false);
  const toggleExpansion = () => {
    setExpanded(!expanded);
  };

  return (
    <div className={`expandable-cont ${expanded}`}>
      <div onClick={toggleExpansion}>
        <h1>{title}</h1>
        {expanded ? (
          <i className="fa-solid fa-chevron-up"></i>
        ) : (
          <i className="fa-solid fa-chevron-down"></i>
        )}
      </div>
      {expanded && (
        <div className="extended-forms">
          {forms.map((form) => {
            return <div key={form}>{form}</div>;
          })}
          <button>New</button>
        </div>
      )}
    </div>
  );
}
