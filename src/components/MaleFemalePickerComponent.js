import React from 'react';

const MaleFemalePickerComponent = props => {
    //const [maleFemale, setMaleFemale] = useState('');
    const options = ['MPO','FPO'];

    const content = {display: 'inline-flex', textAlign: 'center', margin: 'auto', paddingLeft: '10px',
                    alignItems: 'center',justifyContent: 'center'};

    let pickerOptions = options.map((option) =>{
        return (
            <option key={option} value={option}>{option}</option>
        )
    }, this);

    const onSelectMaleFemale = (selected) =>{
        props.handleMpoFpoSelect(selected);
        //setMaleFemale(selected);
    }

    return (
        <div style={content}>
            <h2 style={{paddingRight: '5px', textShadow: 'none', color: 'white'}}>MPO/FPO: </h2>
            <select id="picker" name="maleFemalePicker" onChange={e => onSelectMaleFemale(e.target.value)}>
                {pickerOptions}
            </select>
            {/* {console.log(props? props: "no data loaded...")}
            {console.log(players)} */}
        </div>
    );
};

export default MaleFemalePickerComponent;