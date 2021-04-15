import React from 'react';

// CSS
import './Card.css';

function Card( props ) {
    const classes = 'card ' + props.className;

    return <div className={ classes }>{ props.children }</div>
}

export default Card;