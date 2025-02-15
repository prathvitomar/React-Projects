import React from "react";

function PageOptions({PAGE_SIZES, selectedPageSize, setSelectedPageSize}) {
  return (
    <div>
      <select
        value={selectedPageSize}
        onChange={(e) => setSelectedPageSize(parseInt(e.target.value))}
      >
        {PAGE_SIZES &&
          PAGE_SIZES.map((size) => (
            <option key={size} value={size}>
              {size}
            </option>
          ))}
      </select>
    </div>
  );
}

export default PageOptions;
