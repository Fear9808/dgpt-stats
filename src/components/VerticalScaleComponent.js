import styles from '../style/ScaleComponentStyle.module.css'


const VerticalScaleComponent = props => {
    return (
        <div className={styles.scaleText}>
            {props.text}
            <div className={styles.verticalLine}/>
        </div>
    );
};

export default VerticalScaleComponent;