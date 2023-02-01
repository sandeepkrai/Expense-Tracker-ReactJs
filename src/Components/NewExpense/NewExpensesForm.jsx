import "./NewExpensesForm.css";
import React, { useState } from "react";

const NewExpensesForm = (props) => {
  // const [userInput, setUserInput] = useState({
  //   enteredTitle: "",
  //   enteredAmount: "",
  //   enteredDate: "",
  //   formData: ''
  // });

  // const titleChangeHandeler = (event) => {
  //   // setUserInput({
  //   //   ...userInput,
  //   //   enteredTitle: event.target.value,
  //   // });
  //   setUserInput((previousState)=>{
  //       return { ...previousState, enteredTitle: event.target.value };
  //   });
  // };

  // const amountChangeHandeler = (event) => {
  //   // setUserInput({
  //   //   ...userInput,
  //   //   enteredTitle: event.target.value,
  //   // });
  //   setUserInput((previousState) => {
  //     return { ...previousState, enteredAmount: event.target.value };
  //   });
  // };

  // const dateChangeHandeler = (event) => {
  //   // setUserInput({
  //   //   ...userInput,
  //   //   enteredTitle: event.target.value,
  //   // });
  //   setUserInput((previousState) => {
  //     return { ...previousState, enteredDate: event.target.value };
  //   });
  // };

  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  const formHandeler = (event) => {
    event.preventDefault();
    const values = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };
    setEnteredTitle('');
    setEnteredAmount('');
    setEnteredDate('');
    props.onSaveHandeler(values);
  };

  const titleChangeHandeler = (event) => {
    setEnteredTitle(event.target.value)
  }

  const amountChangeHandeler = (event) => {
    setEnteredAmount(event.target.value);
  };

  const dateChangeHandeler = (event) => {
    setEnteredDate(event.target.value);
  };


  return (
    <form action="" onSubmit={formHandeler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label htmlFor="">Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandeler}
          />
        </div>
        <div className="new-expense__control">
          <label htmlFor="">Amount</label>
          <input
            type="number"
            value={enteredAmount}
            onChange={amountChangeHandeler}
            min="0.01"
            step="0.01"
          />
        </div>
        <div className="new-expense__control">
          <label htmlFor="">Date</label>
          <input
            type="date"
            value={enteredDate}
            onChange={dateChangeHandeler}
            min="2021-01-01"
            max="2023-01-09"
          />
        </div>
        <div className="new-expense__actions">
          <button type="submit">Add Expense</button>
        </div>
      </div>
    </form>
  );
};

export default NewExpensesForm;
