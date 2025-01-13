import React, { useEffect, useState } from "react";
import EmployeeList from "./EmployeeList";
import EmployeeInformation from "./EmployeeInformation";
import "./styles.css";
import { data } from "./data";

function Main() {
  const [dataList, setDataList] = useState(data);
  const [selectedList, setSelectedList] = useState(null);

  function handleCancel(name) {
    if(selectedList[0].name === name) {
      setSelectedList(null);
    }
    setDataList((item) => item.filter((data) => data.name !== name));
  }

  function handleSelect(name) {
    setSelectedList(dataList.filter((item) => item.name == name));
    console.log(selectedList);
  }

  return (
    <>
      <div>
        <h1 className="div-center">Employees Database Management</h1>
        <div className="div-center">
          <div className="employeeList">
            <EmployeeList
              data={dataList}
              handleCancel={(name) => handleCancel(name)}
              handleSelect={(name) => handleSelect(name)}
            />
          </div>
          {selectedList && selectedList.length > 0 ? (
            <div className="employeeInfo">
              <EmployeeInformation selectedList={selectedList[0]} />
            </div>
          ) : (
            <h3>Please Select from the List</h3>
          )}
        </div>
      </div>
    </>
  );
}

export default Main;
