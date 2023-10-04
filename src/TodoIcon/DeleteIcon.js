import React from 'react';
import { TodoIcon } from './index.js';

function DeleteIcon({onDelete}){
    return(
        <TodoIcon
        type="Delete"
        color="transparent"
        onClick={onDelete}
        />);
}

export {DeleteIcon};