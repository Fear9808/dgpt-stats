import React from 'react';

const YearPickerComponent = props => {
    //const [maleFemale, setMaleFemale] = useState('');
    const options = ['2022','2021', '2020'];

    const content = {display: 'inline-flex', textAlign: 'center', margin: 'auto', paddingLeft: '10px',
                    alignItems: 'center',justifyContent: 'center'};

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
        <div style={content}>
            <h2 style={{paddingRight: '5px', textShadow: 'none', color: 'white'}}>Year:</h2>
            <select id="picker" name="yearPicker" onChange={e => onSelectYear(e.target.value)}>
                {pickerOptions}
            </select>
            {/* {console.log(props? props: "no data loaded...")}
            {console.log(players)} */}
        </div>
    );
};

export default YearPickerComponent;