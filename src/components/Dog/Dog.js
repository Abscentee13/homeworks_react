import css from '../Pet.module.css';

import {DeleteButton} from "../../components";

const Dog = ({dog,dispatch}) => {
    const {id, name} = dog;


    return (
        <div className={css.petBlock}>
            <div className={css.petElements}> {id}:  </div>
            <div className={css.petElements}> {name} </div>
            <DeleteButton dispatch={dispatch} actionType= {'DELETE_DOG'} id={id} />
        </div>
    );
};

export {Dog};