// CSS
import './ExpenseItem.css';

// JSX
import Card from '../UI/Card';
import ExpenseDate from './ExpenseDate';

function ExpenseItem( props ) {
    const clickedHandler = () => {
        console.log("Clicked!");
    };

    return (
        <Card className="expense-item">
            <ExpenseDate date={ props.date }/>

            <div className="expense-item__description">
                <h2>{ props.title }</h2>

                <div className="expense-item__price">${ props.amount }</div>
            </div>

            <button
                onClick={ clickedHandler }
            >
                Change Title
            </button>
        </Card>
    );
}

export default ExpenseItem;
