import React, { useState } from 'react'
import mockData from '../utils/mockData'

export default function Footer() {
  const [statistics,setStatistics]=useState(false)
  const passed=mockData.filter((res)=>res.finalGrade>4)
  const failed=mockData.filter((res)=>res.finalGrade<4)
  const gradeA=mockData.filter((res)=>res.finalGrade>8)
  const gradeB=mockData.filter((res)=>res.finalGrade>6&&res.finalGrade<=8)
  const gradeC=mockData.filter((res)=>res.finalGrade>4&&res.finalGrade<=6)
  const gradeD=mockData.filter((res)=>res.finalGrade>2&&res.finalGrade<=4)
  let totalGrade=0;
  mockData.forEach((res)=>{
    totalGrade=totalGrade+parseInt(res.finalGrade);
  })
  console.log(totalGrade)
 const handleHide=()=>{
  setStatistics(false)
 }
  const handleStatistics=()=>{
      setStatistics(true)
  }
  return (
    <div className='footer'>
        <button className='show' onClick={handleStatistics}>ShowStat</button>
        {
      statistics&&(
        <div className='statistics'>
          <table className='statTable'>
            <thead className='statThead'>
              <tr><th>statistics</th>
                  <th>values</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>Total No of Students</th>
                <td>{mockData.length}</td>
              </tr>
              <tr>
                <th>Total Students Passed</th>
                <td>{passed.length}</td>
              </tr>
              <tr>
                <th>Total Students Failed</th>
                <td>{failed.length}</td>
              </tr>
              <tr>
                <th>Average Grade</th>
                <td>{(totalGrade/mockData.length).toFixed(1)}</td>
              </tr>
              <tr>
                <th>Total No of Students</th>
                <td>{mockData.length}</td>
              </tr>
              <tr>
                <th>Grade(8-10)</th>
                <td>{gradeA.length}</td>
              </tr>
              <tr>
                <th>Grade(6-8)</th>
                <td>{gradeB.length}</td>
              </tr>
              <tr>
                <th>Grade(4-6)</th>
                <td>{gradeC.length}</td>
              </tr>
              <tr>
                <th>Grade(2-4)</th>
                <td>{gradeD.length}</td>
              </tr>
            </tbody>
          </table>
          <button className='hide' onClick={handleHide}>hide</button>
        </div>
      )
    }
    </div>
    
  )
}
