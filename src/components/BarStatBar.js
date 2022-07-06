import React, {useEffect, useState} from 'react';
import styles from '../style/BarStatBarStyle.module.css'


const BarStatBar = props => {
    const [dataValue, setDataValue] = useState(0);
    const [barColor, setBarColor] = useState('white')

    const barStyle = {  height: dataValue+'%', width: '100%', backgroundColor: barColor,
                        display: 'inline-block', alignSelf: 'flex-end', zIndex: '0'};

    useEffect(() => {
        if(props.dataValue){
            setDataValue(Math.round(props.dataValue * 100)/100);
            setBarColor(props.barColor);
        }
    },[props]);

    return (
        <div style={barStyle}>
            <p className={dataValue < 15? styles.statTextOver : styles.statText}>{dataValue}</p>
        </div>
    );
};

export default BarStatBar;