import React from 'react';
import { TodoIcon } from './TodoIcon';

function CompleteIcon({completed, onComplete}){
    return(
        <TodoIcon
        type="Check"
        color={completed ? 'lime' : 'transparent'}
        onClick={onComplete}
        />);
}

export {CompleteIcon};

