// CSS
import './Expenses.css';

// JSX
import Card from './Card';
import ExpenseItem from './ExpenseItem';

function Expenses( props ) {
    return (
        <Card className="expenses">
            <ExpenseItem
                amount={ props.items[0].amount }
                date={ props.items[0].date }
                title={ props.items[0].title }
            />

            <ExpenseItem
                amount={ props.items[1].amount }
                date={ props.items[1].date }
                title={ props.items[1].title }
            />

            <ExpenseItem
                amount={ props.items[2].amount }
                date={ props.items[2].date }
                title={ props.items[2].title }
            />

            <ExpenseItem
                amount={ props.items[3].amount }
                date={ props.items[3].date }
                title={ props.items[3].title }
            />
        </Card>
    );
}

export default Expenses;
