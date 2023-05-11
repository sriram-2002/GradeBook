import React from 'react'

export default function Popup(props) {
  return (
    <div>
        {props.showPopup && (
        <div className='details-popup'>
          <div className='popup-content'>
            <h2>Details</h2>
            {console.log(props.mockData[props.selectDetails].name)}
            <p>Name: {props.mockData[props.selectDetails].name}</p>
            <p>Ticket Number: {props.mockData[props.selectDetails].ticketNumber}</p>
            <p>Rating Grade: {props.mockData[props.selectDetails].ratingGrade}</p>
            <p>Exam Grade: {props.mockData[props.selectDetails].examGrade}</p>
            <p>Final Grade: {props.mockData[props.selectDetails].finalGrade}</p>
            <button onClick={props.handleCloseDetails} >Close</button>
          </div>
        </div>
      )}
    </div>
  )
}
