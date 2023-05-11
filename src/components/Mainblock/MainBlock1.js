import React,{useState} from 'react'
export default function MainBlock1(props) {
  return (
    <div className='main1'>

        <div className='buttonkey'>
            <button id='all' className='buttons' onClick={props.handleFilterAll}>All</button>
            <button id='pass' className='buttons'onClick={props.handleFilterPass}>passed</button>
            <button id='fail' className='buttons' onClick={props.handleFilterFail}>failed</button>
            <button id='az' className='buttons' onClick={props.buttonAlphabet==='A-Z'? props.handleFilter_az : props.handleFilter_za}>{props.buttonAlphabet}</button>
            <button id='dsc' className='buttons' onClick={props.buttonLabel==='1-10'?props.handleFilterAsc:props.handleFilterDes}>{props.buttonLabel}</button>
        </div>
        <div className='searchdownload'>
            <input type='search' className='searchbox' onChange={props.handleSearching} placeholder='Search By Name'/>
            <button className='buttons' onClick={props.handleDownload}>Download</button>
        </div>
        
    </div>
    
)}