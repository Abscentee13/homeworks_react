import './mission.css';

const Mission = ({mission}) => {

    const {flight_number, mission_name, launch_year, links} = mission;

    return (
        <div className = "mission-block">
            <div>flight_number: {flight_number}</div>
            <div>mission_name: {mission_name}</div>
            <div>launch_year: {launch_year}</div>

            <div>
                mission_patch_small
                <img src={links['mission_patch_small']} alt={links['mission_patch_small']}/>
            </div>
        </div>
    );
}

export {Mission};