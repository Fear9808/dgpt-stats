import React, {useEffect, useState} from 'react';
import styles from '../style/BarStatBarStyle.module.css'
import keyframes from '../style/keyframes.css';


const BarStatBar = props => {
    const [dataValue, setDataValue] = useState(0);
    const [barColor, setBarColor] = useState('white')

    const barStyle = {  height: dataValue+'%', width: '100%', backgroundColor: barColor, transition: 'height 1s',
                        display: 'inline-block', alignSelf: 'flex-end', bottom: '0', zIndex: '0', boxShadow: '.05rem .0rem .2rem black'};

    useEffect(() => {
        if(props.dataValue){
            setDataValue(Math.round(props.dataValue * 100)/100);
            setBarColor(props.barColor);
        }
    },[props]);

    return (
            <div style={barStyle}>
                <p className={dataValue < 18? styles.statTextOver : styles.statText}>{dataValue}</p>
            </div>
    );
};

export default BarStatBar;