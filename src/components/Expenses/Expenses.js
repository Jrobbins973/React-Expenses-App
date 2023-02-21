import React, {useState} from 'react'
import "./Expenses.css"
import Card from '../UI/Card'
import ExpensesFilter from '../NewExpense/ExpensesFilter'
import ExpensesList from './ExpensesList'
import ExpensesChart from './ExpensesChart'



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
            <ExpensesChart expenses = {filteredExpenses}/>
            
            <ExpensesList items = {filteredExpenses}/>
        

            


        </Card>
        </div>
    )
}

export default Expenses