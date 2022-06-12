import React, {useEffect, useState} from 'react';

const Home = () => {
    const [data, setData] = useState();

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
            <p>This is home page</p>
            {console.log(data? data: "no data loaded...")}
        </div>
    );
};

export default Home;