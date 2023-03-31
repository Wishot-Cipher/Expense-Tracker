import React from 'react'
// import Container from 'react-bootstrap/Container'
import IncomeItems from './IncomeItems';

function IncomeList({Income, SetIncome, setcurrency}) {

  // The delete function
    const removeIncome = remove => {
     let deleted = Income.filter((v, index)=> index !== remove);
     SetIncome(deleted);
     setcurrency(true);
    }

    const sortByDate = (a, b) =>{   //This sorts my Expenses based on the dates created
        return a.date - b.date;
    }

  return (
    <section className='incomelist'>
    <>
        {  Income.sort(sortByDate).map((value, index) =>(
         <IncomeItems 
         key={index}
        income={value}
        index={index}
        removeIncome={removeIncome} 
     />
        )) 
    }
    </>
    </section>
  )
}

export default IncomeList