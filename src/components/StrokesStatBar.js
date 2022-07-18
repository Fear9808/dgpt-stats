import React, {useEffect, useState} from 'react';
import * as Default from '../style/DefaultValues';
import StrokesBarPartComponent from './StrokesBarPartComponent';


const StrokesStatBar = props => {
    const [strokes, setStrokesValue] = useState({});

    const barStyle = {  display: 'flex', transition: 'width 1s', width: '100%', height: '70%', zIndex: '0', alignSelf: 'center' ,boxShadow: '.1rem .1rem .2rem black'};

    

    useEffect(() => {
        if(props.dataValue){
            setStrokesValue(props.dataValue);
            setBarColor(props.barColor);
        }
    },[props]);

    return (
        <div style={barStyle}>
            <StrokesBarPartComponent dataValue={strokes.ace} barColor={Default.ACE_COLOR}/>
            <StrokesBarPartComponent dataValue={strokes.eagle} barColor={Default.EAGLE_COLOR}/>
            <StrokesBarPartComponent dataValue={strokes.birdie} barColor={Default.BIRDIE_COLOR}/>
            <StrokesBarPartComponent dataValue={strokes.par} barColor={Default.PAR_COLOR}/>
            <StrokesBarPartComponent dataValue={strokes.bogey} barColor={Default.BOGEY_COLOR}/>
            <StrokesBarPartComponent dataValue={strokes.doubleBogey} barColor={Default.DOUBLE_BOGEY_COLOR}/>
            <StrokesBarPartComponent dataValue={strokes.tripleBogey} barColor={Default.TRIPLE_BOGEY_COLOR}/>
        </div>
    );
};

export default StrokesStatBar;