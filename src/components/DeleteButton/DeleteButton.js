import React from "react";

import css from './DeleteButton.module.css';

const DeleteButton = ({dispatch, actionType, id}) => {

    return (
        <button className={css.deleteButton} onClick={()=>dispatch({type: actionType, payload:id})}>delete</button>
    )

}

export {DeleteButton};