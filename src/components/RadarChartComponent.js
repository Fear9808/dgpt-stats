import React, {useEffect, useState} from 'react';

import styles from '../style/StatComponentStyle.module.css';
import * as Default from '../style/DefaultValues';
import {
    Chart as ChartJS,
    RadialLinearScale,
    PointElement,
    LineElement,
    Filler,
    Tooltip,
    Legend,
  } from 'chart.js';
import { Radar } from 'react-chartjs-2';



const RadarChartComponent = props => {
    const [playerName, setPlayerName] = useState('Name');
    const averageName = 'Average';
    const [playerData, setPlayerData] = useState(Default.DEFAULT_PLAYER_OBJECT);
    const [averageData, setAverageData] = useState(Default.DEFAULT_PLAYER_OBJECT);


    useEffect(() => {
        if (props.playerData.score) {
            setPlayerData(props.playerData? props.playerData : {});
            setAverageData(props.averageData? props.averageData : {});
            setPlayerName(props.playerData.playerName.split(' ')[0]);
        }
    },[props]);

    ChartJS.register(
        RadialLinearScale,
        PointElement,
        LineElement,
        Filler,
        Tooltip,
        Legend
      );

    const radarData = {
                labels: [ 'Fairway Hits', 'C1 Putting', 'C1 Reg', 'C2 Putting', 'C2 Reg', 'Scramble'],
                datasets: [
                {
                    label: playerName,
                    data: [ playerData.stats.fairwayHits,
                        playerData.stats.circle1Putting, playerData.stats.circle1Reg, playerData.stats.circle2Putting,
                        playerData.stats.circle2Reg, playerData.stats.scramble],
                    backgroundColor: 'rgba(235, 113, 20, 0.3)',
                    borderColor: Default.PLAYER_COLOR,
                    borderWidth: 1,
                },
                {
                    label: averageName,
                    data: [ averageData.stats.fairwayHits,
                         averageData.stats.circle1Putting, averageData.stats.circle1Reg, averageData.stats.circle2Putting,
                         averageData.stats.circle2Reg, averageData.stats.scramble],
                    backgroundColor: 'rgb(235, 177, 52, 0.3)',
                    borderColor: Default.AVERAGE_COLOR,
                    
                    borderWidth: 1,
                },
                ],
    };
        
    

    

    const radarOptions = {
            scales: {
              r: {
                pointLabels: {
                    color: Default.DEFAULT_TEXT_COLOR,
                    font: {
                        size: Default.DEFAULT_STAT_TEXT_SIZE,
                    },
                },
                ticks: {
                    showLabelBackdrop: false,
                    color: Default.PAR_COLOR
                  },
                angleLines: {
                    color: Default.MAIN_SECTION_BG_COLOR
                  },
                grid: {
                    color: Default.MAIN_SECTION_BG_COLOR
                  },
                min: 0,
                max: 100
              }
            },
            plugins: {
                legend: {
                    position: 'bottom',
                    labels: {
                        font: {
                            size: Default.DEFAULT_STAT_TEXT_SIZE,
                            amily: `'Segoe UI', Tahoma, Geneva, Verdana, sans-serif`,
                        },
                        color: Default.DEFAULT_TEXT_COLOR
                    }
                },
            }
    };

    return (
        <div className={styles.background}>
            
            <div className={styles.header} style={{display: 'block', padding: '1%', paddingBottom: '10%', maxWidth: '420px', margin: 'auto'}}>
                <h2 style={{color: Default.DEFAULT_CARD_NAME_COLOR, marginTop:  '-5px'}}>{'Player Map'}</h2>
                <Radar data={playerData.score? radarData : {}} options={radarOptions}/> 
            </div>
        </div>
    );

    
};

export default RadarChartComponent;