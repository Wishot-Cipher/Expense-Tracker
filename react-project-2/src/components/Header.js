import React from 'react';
import Button from 'react-bootstrap/Button';

function Header({TotalIncome, setTotal, currency,setcurrency}) {
  const NairaHandler = ()=>{
   setTotal(TotalIncome)
   setcurrency(!currency)
  }

  return (
    <div className='header'>
        <header>
            <h1> Expense Tracker</h1>
            <h2>{currency ? "$"+(TotalIncome).toLocaleString() : "N"+(TotalIncome*750).toLocaleString()}<Button onClick={NairaHandler} variant="primary">{currency? "Naira" : "Dollar"}</Button></h2>
        </header>
    </div>
  )
}

export default Header