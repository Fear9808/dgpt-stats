import React, {useEffect, useState} from 'react';

const DisplayAllPlayerData = props => {
    const [playerData, setPlayerData] = useState({});

    useEffect(() => {
        if(props.playerData){
            setPlayerData(props.playerData);
            console.log(props.playerData);
        }
        
        
    },[props.playerData]);

    return (
        <div>
            <h1>Player Data</h1>
            <div>
                <p>Name: {playerData?.name}</p>
                <p>Position: {playerData?.playerPosition}</p>
                <div>
                    <h3>PUTTING</h3>
                    <p>Circle 1 putting: {playerData.stats?.circle1Putting}</p>
                    <p>Circle 2 putting: {playerData.stats?.circle2Putting}</p>
                    <h3>REGULATION</h3>
                    <p>Circle 1 regulation: {playerData.stats?.circle1Reg}</p>
                    <p>Circle 2 regulation: {playerData.stats?.circle2Reg}</p>
                    <h3>OTHER</h3>
                    <p>Fairway Hits: {playerData.stats?.fairwayHits}</p>
                    <p>OB: {playerData.stats?.ob}</p>
                    <p>Parked: {playerData.stats?.parked}</p>
                    <p>Scramble: {playerData.stats?.scramble}</p>
                    <p>Throw-in: {playerData.stats?.throwIn}</p>
                </div>
                <div>
                    <h3>SCORE</h3>
                    <p>Ace: {playerData.score?.ace}</p>
                    <p>Eagle: {playerData.score?.eagle}</p>
                    <p>Birdie: {playerData.score?.birdie}</p>
                    <p>Par: {playerData.score?.par}</p>
                    <p>Bogey: {playerData.score?.bogey}</p>
                    <p>Double Bogey: {playerData.score?.doubleBogey}</p>
                    <p>Triple Bogey: {playerData.score?.tripleBogey}</p>
                </div>
            </div>
            
        </div>
    );
};

export default DisplayAllPlayerData;