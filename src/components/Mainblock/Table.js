import React, { useState } from 'react';
import Popup from './Popup';
function Table({mockData}) {
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [showPopup, setShowPopup] = useState(false);
  const [selectDetails,setSelectDetails] = useState(null)
  const handleRowClick = (student) => {
    setSelectedStudent(student.id )
    setSelectDetails(student.id)
    setShowPopup(false)
  };

  const handleCloseDetails = () => {
    setShowPopup(false)
    
  };
  const handleClickDetails=(student)=>{
    const matchingIndex=mockData.findIndex((res)=>res.id==student.id)
    if(matchingIndex!==-1){
      setSelectDetails(matchingIndex)
      setSelectedStudent(null);
      setShowPopup(true);
    }
   
  }
  console.log("hello")
 

  return (
    <div className='main2'>
      <table>
        <thead className='thead'>
          <tr>
            <th>No</th>
            <th>Name</th>
            <th>Ticket Number</th>
            <th>Rating Grade</th>
            <th>Exam Grade</th>
            <th>Final Grade</th>
            <th>Status</th>
            <th>Details</th>
          </tr>
        </thead>
        <tbody>
          {mockData.map((item, index) => (
            <tr
              key={item.id}
              onClick={() => handleRowClick(item)}
              style={{
                backgroundColor: selectedStudent === item.id ? 'orange' : 'white',
                textTransform: selectedStudent === item.id ? 'uppercase' : 'none',
              }}
            > 
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.ticketNumber}</td>
              <td>{item.ratingGrade}</td>
              <td>{item.examGrade}</td>
              <td>{item.finalGrade}</td>
              <td>{item.finalGrade > 4 ? 'passed' : 'failed'}</td>
              <td><button className='details' onClick={(event)=>{ event.stopPropagation();handleClickDetails(item)}}>Details</button></td>
            </tr>
           
          ))}
        </tbody>
      </table>
      <Popup mockData={mockData} handleCloseDetails={handleCloseDetails} selectDetails={selectDetails} showPopup={showPopup}/>
    </div>
  );
}

export default Table;
