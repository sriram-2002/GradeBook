import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Footer from "./components/Footer";
import MainBlock from "./components/Mainblock/MainBlock";
const Apply =()=>{
    const today = new Date();
    const day = today.getDate().toString().padStart(2, '0');
    const month = (today.getMonth() + 1).toString().padStart(2, '0');
    const year = today.getFullYear().toString().slice(-2);
    const date = `${day}-${month}-${year}`;
   
    return(
        <>
        <div className="title">
            <img className='titlelogo' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTO3rmWh7ZP0IYU7Z0sKpy0XQwdNoZkOCeFePUvpAcU0g&s'></img>
            <h1>GRADE BOOK</h1><span className="date">{date}(dd-mm-yy)</span>
        </div>
        <Header/>
        <MainBlock/>
        <Footer/>
        </>
    )
}
const root =ReactDOM.createRoot(document.getElementById('root'));
root.render(<Apply/>);

