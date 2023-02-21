import React, {useState} from 'react'
import './NewExpense.css'
import ExpenseForm from './ExpenseForm'




function NewExpense(props) {

    const [addExpense, setAddExpense] = useState(true)

    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        }

        props.onAddExpense(expenseData)
    }

    return (
        <div className='new-expense'>
        
        {addExpense ?  (<button onClick={() => setAddExpense(false)}>Add New Expense</button> 
        ) : ( 
        <ExpenseForm 
        onSaveExpenseData = {saveExpenseDataHandler}
        setAddExpense = {setAddExpense}
        /> )}
        
        
        </div>
    )
}

export default NewExpense