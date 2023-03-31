import React from 'react'

function IncomeItems({income,index,removeIncome}) {
  // Setting up the date 
    let date = new Date(income.date);
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();

    // Got removeIncomeas a prom from the IncomeList Component
    const deleteIncome = remove => {
      removeIncome(remove)
    }
    
    // The jsx that is showing on the browser, income and index are props gotten ftom the incomeList component
  return (
    <div className='incomeList'>
      <div className='desc'> {income.desc}</div>
      <div className='price'> ${income.price }</div>
      <div className='date'> {`${day}/${month}/${year}`}</div>
      <button className='delete' onClick={()=>deleteIncome(index)}>Delete</button>
    </div>
  )
}

export default IncomeItems