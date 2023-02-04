import {DeleteButton} from "../../components";

const Dog = ({dog,dispatch}) => {
    const {id, name} = dog;

    const deleteDog = () =>{
        dispatch({type:'DELETE_DOG', payload: id})
    }

    return (
        <div>
            {id}) {name}
            <DeleteButton dispatch={dispatch} actionType= {'DELETE_DOG'} id={id} />
        </div>
    );
};

export {Dog};