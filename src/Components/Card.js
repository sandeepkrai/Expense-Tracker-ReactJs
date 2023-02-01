import './ExpenseDate.css'

function Card(props){
    return (
        <div className= {props.className}>{props.children}</div>
    );
}

export default Card;