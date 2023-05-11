import React,{useState} from 'react'
import jsPDF from 'jspdf'
import 'jspdf-autotable';
import MainBlock1 from './MainBlock1'
import Table from './Table'
import mockData from '../../utils/mockData'
export default function MainBlock() {
  const [buttonLabel, setButtonLabel] = useState('1-10');
  const [buttonAlphabet,setButtonAlphabet]=useState('A-Z')
  const [filteredList,setFilteredList]=useState(mockData);

  const handleFilter_az = ()=>{
    setButtonAlphabet('Z-A')
    const sortedArray = [...mockData].sort((a, b) => a.name>b.name?1:-1);
    setFilteredList(sortedArray)
    console.log(sortedArray)
    console.log("a-z")
  }
  const handleFilter_za=()=>{
    setButtonAlphabet('A-Z')
    const sortedArray =[...mockData].sort((a,b)=>a.name<b.name?1:-1);
    setFilteredList(sortedArray)
  }
  const handleDownload = () => {
    const doc = new jsPDF();
    doc.autoTable({
      head: [['No', 'Name', 'Ticket Number', 'Rating Grade', 'Exam Grade', 'Final Grade', 'Status']],
      body: filteredList.map(item => [item.id, item.name, item.ticketNumber, item.ratingGrade, item.examGrade, item.finalGrade, item.finalGrade > 4 ? 'passed' : 'failed'])
    });
    doc.save('table.pdf');
  };
  const handleFilterPass = () => {
    const filtered1 = mockData.filter(val => val.finalGrade > 4)
    setFilteredList(filtered1)
    console.log("pass")
  }
  const handleFilterFail = () => {
    const filtered2 = mockData.filter(val => val.finalGrade < 4)
    setFilteredList(filtered2)
    console.log("fail")
  }
  const handleFilterAll = ()=>{
    setFilteredList(mockData)
  }
  const handleFilterAsc = ()=>{
      setButtonLabel('10-1')
      console.log(buttonLabel)
      const sortedArray = [...mockData].sort((a, b) => b.finalGrade - a.finalGrade);
      const descendingTen=sortedArray.slice(0,10)
      setFilteredList(descendingTen)
      console.log("asc")
  }
  const handleFilterDes=()=>{
    setButtonLabel('1-10')
    const sortedArray = [...mockData].sort((a, b) => a.finalGrade - b.finalGrade);
    const ascendingTen=sortedArray.slice(0,10)
    setFilteredList(ascendingTen)
    console.log("asc")
  }
  const handleSearch=(event)=>{
    console.log(event.target.value)
    const searchText = event.target.value.toLowerCase();
    const filteredData = [...mockData].filter((item) =>
      item.name.toLowerCase().includes(searchText) 
    );
    setFilteredList(filteredData);
  };  
  return (
    <div className='mainblock'>
        <MainBlock1 buttonAlphabet={buttonAlphabet} handleFilter_za={handleFilter_za} handleFilterDes={handleFilterDes} buttonLabel={buttonLabel} handleDownload={handleDownload} handleSearching={handleSearch} handleFilterPass={handleFilterPass} handleFilterFail={handleFilterFail} handleFilterAll={handleFilterAll} handleFilterAsc={handleFilterAsc} handleFilter_az={handleFilter_az} />
        <Table mockData={filteredList}/>
    </div>
  )
}
