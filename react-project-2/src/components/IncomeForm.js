import React, {useRef, useEffect} from 'react'

function IncomeForm({Income,SetIncome, setcurrency}) {
    const desc = useRef(null)
    const price = useRef(null)
    const date = useRef(null)

// where we set our localStorage
  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(Income));
    }, [Income])


    // The onsubmit session
    const SubmitHandler = e => {
        e.preventDefault();

        let d = date.current.value.split("-");
        let newD = new Date(d[0], d[1], d[2]);

       SetIncome([...Income,{
          "desc" : desc.current.value,
         "price": price.current.value,
         "date": newD.getTime()
         }]);
         setcurrency(true) // this sets the currency to dollar

// This makes the input box empty after we submit ous form
         desc.current.value = "";
         price.current.value = null
         date.current.value = null
    }
  return (
    <form onSubmit={SubmitHandler} className="form">
       <input type="text" name="desc" id="desc" placeholder='Expense describtion...' required   ref={desc}/>
       <input type="number" name="price" id="price" placeholder='$Price..' ref={price} required />
       <input type="date" name="date" id="date" ref={date} placeholder="date.." required  />
       <input type="submit" value="Add Exp" />
    </form>
  )
}

export default IncomeForm