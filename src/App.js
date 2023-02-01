import  ExpenseItem  from './Components/ExpenseItem';
import './Components/ExpenseDate.css';
import Card from './Components/Card'
import NewExpenses from './Components/NewExpense/NewExpenses';
import ExpensesFilter from './Components/NewExpense/ExpensesFilters';
import { useState } from 'react';

function App() {
  const expenses = [
    {
      id: 'e1',
      title: 'Toilet Paper',
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: 'e3',
      title: 'Car Insurance',
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: 'e4',
      title: 'New Desk (Wooden)',
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];

  const [filteredYear,setFilteredYear] = useState('2020');

  const filterChangeHandler = selectedYear => {
    setFilteredYear(selectedYear);
  }

  return (
    <>
    <NewExpenses/>
    <Card className="expenses">
      <ExpensesFilter selected = {filteredYear} onChangeFilter={filterChangeHandler}/>
      <ExpenseItem time = {expenses[0].date} title={expenses[0].title} price={expenses[0].amount}/>
      <ExpenseItem time = {expenses[1].date} title={expenses[1].title} price={expenses[1].amount}/>
      <ExpenseItem time = {expenses[2].date} title={expenses[2].title} price={expenses[2].amount}/>
      <ExpenseItem time = {expenses[3].date} title={expenses[3].title} price={expenses[3].amount}/>
      
    </Card>
    </>
  );
}

export default App;
