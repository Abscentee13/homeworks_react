import css from '../Pets.module.css';

import {Cat} from "../../components";

const Cats = ({cats,dispatch}) => {
    return (
        <div className={css.petsContainer}>
            {cats.map(cat=><Cat key={cat.id} cat={cat} dispatch={dispatch}/>)}
        </div>
    );
};

export {Cats};