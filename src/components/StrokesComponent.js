import React, {useEffect, useState} from 'react';
import styles from '../style/StrokesComponentStyle.module.css'
import * as Default from '../style/DefaultValues';
import VerticalScaleComponent from './VerticalScaleComponent';
import BarStatBar from './BarStatBar';

import utils from '../utils.js'
import StrokesStatBar from './StrokesStatBar';
import NameColorComponent from './NameColorComponent';

const StrokesComponent = props => {
    const [playerName, setPlayerName] = useState('Name');
    const averageName = 'Average';
    const [playerStrokes, setPlayerStrokes] = useState({});
    const [averageStrokes, setAverageStrokes] = useState({});

    useEffect(() => {
        if(props.playerData.stats){
            setPlayerStrokes(props.playerData.score);
            setAverageStrokes(props.averageData.score);
            setPlayerName(props.playerData.playerName.split(' ')[0]);
            //setAverageData(props.averageData);
        }
    },[props]);

    const createScale = (topVal, incrementVal) => {
        let scaleComponents = [];
        for(let value = 0; value <= topVal; value+=incrementVal){
            scaleComponents.push(
                <VerticalScaleComponent text={value}/>
            )
        }
        return scaleComponents;
    }

    return (
        <div className={styles.componentSize}>
            <div className={styles.background}>
                <div className={styles.contentBox}>
                    <div>
                        <h2>{props.statName}</h2>
                    </div>
                    <div className={styles.gridTwoColumns}>
                        <div className={styles.gridRows}>
                            <p className={styles.playerName} style={{color: Default.PLAYER_COLOR}}>{playerName}</p>
                            <p className={styles.playerName} style={{color: Default.AVERAGE_COLOR}}>{averageName}</p>
                        </div>
                        <div className={styles.twoRows}>
                            <div className={styles.block100Vertical}>
                                    <div></div>
                                    {createScale(100, 20)}
                                    <div></div>
                            </div>
                            <div className={styles.flex100}>
                                <StrokesStatBar dataValue={playerStrokes? playerStrokes : {}} barColor={Default.PLAYER_COLOR}/>
                            </div>
                            <div className={styles.flex100}>
                                <StrokesStatBar dataValue={averageStrokes? averageStrokes : {}} barColor={Default.AVERAGE_COLOR}/>
                            </div>
                            
                        </div>
                    </div>
                    <div>
                        <div className={styles.threeColumns}>
                            <NameColorComponent text={'Birdie'} boxColor={Default.BIRDIE_COLOR}/>
                            <NameColorComponent text={'Par'} boxColor={Default.PAR_COLOR}/>
                            <NameColorComponent text={'Bogey'} boxColor={Default.BOGEY_COLOR}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StrokesComponent;