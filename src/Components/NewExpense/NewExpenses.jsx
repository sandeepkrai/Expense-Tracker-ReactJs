import NewExpensesForm from "./NewExpensesForm";
import './NewExpenses.css'

const NewExpenses = (props)=>{

    const saveHandeler  = (data)=>{
        const expenseData = {
          id: Math.random().toString(),
          ...data,
        };
        // console.log(expenseData);
        props.onNewDataHandeler(expenseData);
    }

    return (
        <div className="new-expense">
            <NewExpensesForm onSaveHandeler = {saveHandeler}/>
        </div>
    )
}

export default NewExpenses;