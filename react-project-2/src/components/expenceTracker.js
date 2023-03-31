import React, {useState,useEffect} from 'react'
import Container from 'react-bootstrap/Container'
import Header from './Header'
import IncomeForm from './IncomeForm'
import IncomeList from './IncomeList'

// LocalStorage.get session....
const setvalue= () =>{
  const inital = localStorage.getItem("items");
  return inital ? JSON.parse(inital) : [] ;
}

function ExpenceTracker() {
    const [income, setIncome] = useState(setvalue)
    const [Total, setTotal] = useState(0)
    const [currency, setcurrency] = useState(true)

    useEffect(() => {
      let addIncome = 0;
      for (let i = 0; i < income.length; i++) {
        addIncome += parseInt(income[i].price );
      }

      setTotal(addIncome)
    }, [income])

   
    
  return (
    <Container fluid>
       <Header TotalIncome={Total} setTotal={setTotal} currency={currency} setcurrency={setcurrency} />
       <IncomeForm Income={income} SetIncome={setIncome} currency={currency} setcurrency={setcurrency} />
       <IncomeList Income={income} SetIncome={setIncome} setcurrency={setcurrency} />
       <footer className='footer'>@Wishot</footer>
    </Container>
  )
}

export default ExpenceTracker