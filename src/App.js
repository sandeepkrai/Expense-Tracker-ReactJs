import  ExpenseItem  from './Components/ExpenseItem';
import './Components/ExpenseDate.css';
import Card from './Components/Card'
import NewExpenses from './Components/NewExpense/NewExpenses';
import ExpensesFilter from './Components/NewExpense/ExpensesFilters';
import { useState } from 'react';

const initial_expenses = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];



function App() {
  const [expenses, setExpenses] = useState(initial_expenses);

  const [filteredYear,setFilteredYear] = useState('2020');

  const filterChangeHandler = selectedYear => {
    setFilteredYear(selectedYear);
  }

  const addDataHandeler = (enteredData)=>{
    console.log(enteredData);
    setExpenses((prevExpense)=>{
      return [enteredData, ...prevExpense];
    })
    console.log(expenses);
  }


  return (
    <>
    <NewExpenses onNewDataHandeler = {addDataHandeler} />
    <Card className="expenses">
      <ExpensesFilter selected = {filteredYear} onChangeFilter={filterChangeHandler}/>
      {expenses.map(expense => (<ExpenseItem key = {expense.id} title={expense.title} time={expense.date} price={expense.amount}/>))}
      
      
    </Card>
    </>
  );
}

export default App;
