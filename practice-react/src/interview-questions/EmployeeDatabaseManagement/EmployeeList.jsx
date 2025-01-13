import React from 'react'
import List from './List'
import './styles.css'

function EmployeeList({data, handleCancel, handleSelect}) {

  return (
    <>
    <div className=''>
      <h2>Employees List</h2>
      <div>
          {
            data.length > 0 ? (
              data.map((listItem)=>(
                <div key={listItem.name}>
                  <List name={listItem.name} handleCancel={(name)=> handleCancel(name)} handleSelect={(name)=> handleSelect(name)}/>
                </div>
              ))
            ) : (<h4>No Data is Available</h4>)
          }
      </div>
    </div>
    </>
  )
}

export default EmployeeList