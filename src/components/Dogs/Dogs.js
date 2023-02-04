import css from '../Pets.module.css';

import {Dog} from "../../components";

const Dogs = ({dogs,dispatch}) => {
    console.log(css.petsContainer);

    return (
        <div className={css.petsContainer}>
            {dogs.map(dog=><Dog key={dog.id} dog={dog} dispatch={dispatch}/>)}
        </div>
    );
};

export {Dogs};