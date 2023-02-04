import css from '../Pet.css';

import {DeleteButton} from '../../components';

const Cat = ({cat,dispatch}) => {
    const {id, name} = cat;

    return (
        <div className={css.petBlock}>
            {id}: {name}
            <DeleteButton dispatch={dispatch} actionType= {'DELETE_CAT'} id={id} />
        </div>
    );
};

export {Cat};