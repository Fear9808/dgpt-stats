import React, {useEffect, useState} from 'react';
import PlayerPickerComponent from '../components/PlayerPickerComponent';

const Home = () => {
    const [data, setData] = useState();
    const [player, setPlayer] = useState('');

    const handlePlayerSelect = (selectedPlayer) =>{
        // Passed state from PlayerPickerComponent
        if(selectedPlayer){
            setPlayer(selectedPlayer);
        }else{
            alert("Could not get selected player")
        }
        
    };

    /* const getDataFromApi = async(e)=>{
        e.preventDefault();
        const data = await fetch(`../api/testFunction?query=${query}`);
        const json = await data.json();
        console.log(json);
        if (json[0].name){
        setMessage(json[0]['score']['par']);
        }
    }; */
    useEffect(() => {
        fetch('../api/testFunction')
        .then((response) => response.json())
        .then((responseJson) => {
            setData(responseJson)
        })
        .catch((error) => {
            console.error(error);
        });
    },[]);

    return (
        <div>
            <h1>Home Page</h1>
            <PlayerPickerComponent data={data} handlePlayerSelect={handlePlayerSelect}/>
            <p>This is home page</p>
            <p>{player}</p>
        </div>
    );

    
};

export default Home;