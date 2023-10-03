import React from 'react';
import {ReactComponent as CheckSVG} from './check.svg'
import {ReactComponent as DeleteSVG} from './delete.svg'
import './TodoIcon.css';

const iconTypes={
    "Check":(color) => <CheckSVG className="Icon-svg" fill={color}/>,
    "Delete":(color) => <DeleteSVG className="Icon-svg"fill={color}/>
}

function TodoIcon({type, color, onClick}){
    return(
        <span 
        className={`Icon-container Icon-container-${type}`}
        onClick={onClick}>
            {iconTypes[type](color)}
        </span>
    );
}

export {TodoIcon};

