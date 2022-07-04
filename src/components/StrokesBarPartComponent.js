import React, {useEffect, useState} from 'react';
import styles from '../style/BarStatBarStyle.module.css';


const StrokesBarPartComponent = props => {
    const [dataValue, setDataValue] = useState(0);
    const [barColor, setBarColor] = useState('white')

    const barStyle = {  width: dataValue+'%', height: '100%', backgroundColor: barColor,
                        display: 'inline-block', alignSelf: 'flex-start'};

    

    useEffect(() => {
        if(props.dataValue){
            setDataValue(Math.round(props.dataValue * 10)/10);
            setBarColor(props.barColor);
        }
    },[props]);

    return (
        <div style={barStyle}>
            <p className={styles.statText}>{dataValue > 6? dataValue : ''}</p>
        </div>
    );
};

export default StrokesBarPartComponent;