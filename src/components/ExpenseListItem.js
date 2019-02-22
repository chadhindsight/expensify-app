import React from 'react';
import { Link } from 'react-router-dom';

// export a stateless functional component with expense info
const ExpenseListItem = ({dispatch, id, description, amount, createdAt}) => {
    return (
        <div>
           <Link to={`/edit/${id}`}> 
            <h3>{description}</h3>
           </Link>
            <p>{amount} - {createdAt}</p>
        </div>
    )
}

export default ExpenseListItem;