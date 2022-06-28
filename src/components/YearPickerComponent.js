import React, {useEffect, useState} from 'react';

const YearPickerComponent = props => {
    //const [maleFemale, setMaleFemale] = useState('');
    const options = ['2022','2021', '2020'];

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

    const onSelectYear = (selected) =>{
        props.handleYearSelect(selected);
        //setMaleFemale(selected);
    }

    return (
        <div>
            <h1>Year</h1>
            <select id="picker" name="yearPicker" onChange={e => onSelectYear(e.target.value)}>
                {pickerOptions}
            </select>
            {/* {console.log(props? props: "no data loaded...")}
            {console.log(players)} */}
        </div>
    );
};

export default YearPickerComponent;