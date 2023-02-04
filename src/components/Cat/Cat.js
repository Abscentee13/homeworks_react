import css from '../Pet.module.css';

import {DeleteButton} from '../../components';

const Cat = ({cat,dispatch}) => {
    const {id, name} = cat;

    return (
        <div className={css.petBlock}>
            <div className={css.petElements}> {id}:  </div>
            <div className={css.petElements}> {name} </div>
            <DeleteButton dispatch={dispatch} actionType= {'DELETE_CAT'} id={id} />
        </div>
    );
};

export {Cat};