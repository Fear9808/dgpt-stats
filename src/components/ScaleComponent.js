import styles from '../style/ScaleComponentStyle.module.css'


const ScaleComponent = props => {
    return (
        <div className={styles.scaleText}>
            {props.text}
            <hr style={{position: 'absolute', width: '68%', marginLeft: '15%', marginTop: '-4%'}}/>
        </div>
    );
};

export default ScaleComponent;