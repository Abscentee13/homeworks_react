import './missions.css';

import {useEffect, useState} from "react";

import {Mission} from "../mission/mission";


const Missions = () => {
    const [missions, SetMissions] = useState([]);

    useEffect (() => {
        fetch('https://api.spacexdata.com/v3/launches/')
            .then((data) => data.json())
            .then ((data) => SetMissions(data));
    }
    , []);

    return (
        <div className = "missions-block">
            {missions.filter((mission) => (mission['launch_year'] !== '2020')).map(mission => <Mission key={mission.flight_number} mission = {mission}/>)}
        </div>
    );
}

export {Missions};