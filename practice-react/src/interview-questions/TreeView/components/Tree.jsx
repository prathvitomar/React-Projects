import { useState } from "react";
import "../../styles.css";

export default function Tree({ data }) {
  const [expandedItems, setExpandedItems] = useState({});

  const handleToggle = (label) => {
    setExpandedItems((prev) => ({
      ...prev,
      [label]: !prev[label], // Toggle expanded state
    }));
  };

  return (
    <ul className="tree">
      {data.map((item) => (
        <li key={item.label}>
          <span onClick={() => handleToggle(item.label)}>
            {item.children ? (expandedItems[item.label] ? "▼ " : "▶ ") : "• "}
            {item.label}
          </span>

          {item.children && expandedItems[item.label] && (
            <Tree data={item.children} />
          )}
        </li>
      ))}
    </ul>
  );
}
