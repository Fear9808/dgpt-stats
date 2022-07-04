import React, {useEffect, useState} from 'react';
import styles from '../style/StrokesComponentStyle.module.css';
import * as Default from '../style/DefaultValues';


const NameColorComponent = props => {
    const [text, setTextValue] = useState('');
    const [boxColor, setBoxColor] = useState('white')

    const content = {  width: '100%', height: '100%',
                        display: 'flex', margin: 'auto', textAlign: 'center'};

    const boxStyle = { display: 'inline-block', width: '1em', height: '1em',
     backgroundColor: boxColor, margin: 'auto', textAlign: 'center', marginRight: '5%'};

    const textStyle = { display: 'inline-block', fontSize: 'large',
     color: Default.DEFAULT_TEXT_COLOR, margin: 'auto', textAlign: 'center', marginLeft: '5%'};

    useEffect(() => {
        if(props.text){
            setTextValue(props.text);
            setBoxColor(props.boxColor);
        }
    },[props]);

    return (
        <div style={content}>
            <div style={boxStyle}/>
            <p style={textStyle}>{text}</p>
        </div>
    );
};

export default NameColorComponent;