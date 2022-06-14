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
                <p>Name: {playerData.name}</p>
                <div>
                    <h3>PUTTING</h3>
                    <p>Circle 1 putting: {playerData?.circle_1_putting}</p>
                    <p>Circle 2 putting: {playerData?.circle_2_putting}</p>
                    <h3>REGULATION</h3>
                    <p>Circle 1 regulation: {playerData?.circle_1_reg}</p>
                    <p>Circle 2 regulation: {playerData?.circle_2_reg}</p>
                    <h3>OTHER</h3>
                    <p>Fairway Hits: {playerData?.fairway_hits}</p>
                    <p>OB: {playerData?.ob}</p>
                    <p>Parked: {playerData?.parked}</p>
                    <p>Scramble: {playerData?.scramble}</p>
                    <p>Throw-in: {playerData?.throw_in}</p>
                </div>
                <div>
                    <h3>SCORE</h3>
                    <p>Ace: {playerData.score?.ace}</p>
                    <p>Eagle: {playerData.score?.eagle}</p>
                    <p>Birdie: {playerData.score?.birdie}</p>
                    <p>Par: {playerData.score?.par}</p>
                    <p>Bogey: {playerData.score?.bogey}</p>
                    <p>Double Bogey: {playerData.score?.double_bogey}</p>
                    <p>Triple Bogey: {playerData.score?.triple_bogey}</p>
                </div>
            </div>
            
        </div>
    );
};

export default DisplayAllPlayerData;