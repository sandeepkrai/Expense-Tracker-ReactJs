import './ExpenseItem.css'
import ExpenseDate from './ExpenseDate';

function ExpenseItem (props) {
    //const title = props.title;
    const price = props.price;
    // const [title,changedTitle] = useState(props.title);
    // const clickHandeler = ()=>{
    //     changedTitle("Changed!");
    //     console.log("Clicked!");
    // }

    return (
        
        <div className="expense-item">
            <div><ExpenseDate date = {props.time}></ExpenseDate></div>
            <div className='expense-item__description'>
                <h2 >{props.title}</h2>
                <div className='expense-item__price'>{price}</div>
            </div>
            {/* <button onClick={clickHandeler}>Change Title</button> */}
        </div>
    );
}

export default ExpenseItem