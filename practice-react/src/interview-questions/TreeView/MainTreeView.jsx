import Tree from "./components/Tree.jsx";
import menus from "./data/data.js";
import "../styles.css";

export default function MainTreeView() {
  return (
    <div className="sidebar">
      <Tree data={menus} />
    </div>
  );
}
