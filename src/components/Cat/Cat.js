import '../Pet.css';

const Cat = ({cat,dispatch}) => {
    const {id, name} = cat;

    return (
        <div className="pet-block">
            {id}: {name}
            <button onClick={()=>dispatch({type:'DELETE_CAT', payload:id})}>delete</button>
        </div>
    );
};

export {Cat};