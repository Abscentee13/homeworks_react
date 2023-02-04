
const Dog = ({dog,dispatch}) => {
    const {id, name} = dog;

    const deleteDog = () =>{
        dispatch({type:'DELETE_DOG', payload: id})
    }

    return (
        <div>
            {id}) {name}
            <button onClick={deleteDog}>delete</button>
        </div>
    );
};

export {Dog};