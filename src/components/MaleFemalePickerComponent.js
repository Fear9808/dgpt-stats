import React, {useEffect, useState} from 'react';

const MaleFemalePickerComponent = props => {
    //const [maleFemale, setMaleFemale] = useState('');
    const options = ['MPO','FPO'];

    /* useEffect(() => {
        if(props.mpo_fpo){
            setMaleFemale(props.mpo_fpo);
        }
    },[]); */

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
        <div>
            <h1>MPO/FPO</h1>
            <select id="picker" name="maleFemalePicker" onChange={e => onSelectMaleFemale(e.target.value)}>
                {pickerOptions}
            </select>
            {/* {console.log(props? props: "no data loaded...")}
            {console.log(players)} */}
        </div>
    );
};

export default MaleFemalePickerComponent;