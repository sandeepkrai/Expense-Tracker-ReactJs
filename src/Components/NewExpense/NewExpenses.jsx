import NewExpensesForm from "./NewExpensesForm";
import './NewExpenses.css'

const NewExpenses = ()=>{

    const saveHandeler  = (data)=>{
        const expenseData = {
            ...data,
            id: Math.random(),
        }
        console.log(expenseData);
    }

    return (
        <div className="new-expense">
            <NewExpensesForm onSaveHandeler = {saveHandeler}/>
        </div>
    )
}

export default NewExpenses;