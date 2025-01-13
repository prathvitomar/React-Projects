import React from "react";
import "./styles.css";

function EmployeeInformation({selectedList}) {

  if(selectedList.length === 0) {
    return <h3>Select Employee from the list</h3>
  }

  return (
    <>
    <div className="div-center">
      <div className="div-vertical">
        <h1>Employees Information</h1>
          <div className="div-vertical">
            <img
              style={{
                height : '400px',
                width : '400px',
              }}
              src="https://www.alleganyco.gov/wp-content/uploads/unknown-person-icon-Image-from.png"
              alt="Unknown Image"
            />
            <div>
              <h2>{selectedList.name}</h2>
              <p>{selectedList.email}</p>
              <p>{selectedList.phone}</p>
              <p>{selectedList.country}</p>
            </div>
          </div>
      </div>
    </div>

    </>
  );
}

export default EmployeeInformation;
