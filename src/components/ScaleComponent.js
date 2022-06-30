import styles from '../style/ScaleComponentStyle.module.css'


const ScaleComponent = props => {
    return (
        <div className={styles.scaleText}>
            {props.text}
            <hr className={styles.line}/>
        </div>
    );
};

export default ScaleComponent;