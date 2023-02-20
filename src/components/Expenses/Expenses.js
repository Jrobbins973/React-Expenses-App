import React, {useState} from 'react'
import ExpenseItem from './ExpenseItem'
import "./Expenses.css"
import Card from '../UI/Card'
import ExpensesFilter from '../NewExpense/ExpensesFilter'





function Expenses(props) {


    const [year, setYear] = useState('2020')

    const handleYearChange = (e) => {
        setYear(e.target.value)
    }


    const filteredExpenses = props.items.filter(expense => {
        return expense.date.getFullYear().toString() === year
    })


    return (
        <div>
        <Card className='expenses'>
            <ExpensesFilter 
            year={year}
            setYear={setYear}
            handleYearChange={handleYearChange}/>
            
            {filteredExpenses.length ===0 && <p>No Expenses Found</p> }
            
            {filteredExpenses.length > 0 && filteredExpenses.map(expenses => 
                                                                            <ExpenseItem 
                                                                            key={expenses.id}
                                                                            title={expenses.title} 
                                                                            amount={expenses.amount} 
                                                                            date={expenses.date}
                                                                            />)}
        

            


        </Card>
        </div>
    )
}

export default Expenses