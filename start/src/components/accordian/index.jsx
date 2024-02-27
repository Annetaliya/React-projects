import React, {useState} from 'react';
import data from './data';
import './styles.css'
// single selection
export default function Accordian () {

    const [selected, setSelected] = useState(null);
    const [enableMultiSelection, setEnableMultiSelection] = useState(false);
    const [multiple, setMultiple] = useState([]);

    const handleSingleSelection = (getCurrentId) => {
        setSelected(getCurrentId === selected ? null : getCurrentId)

    }

    const handleMultiSelection = (getCurrentId) => {
        let cypMultiple = [...multiple];
        const findIndexOfCurrentId = cypMultiple.indexOf(getCurrentId)
        console.log(findIndexOfCurrentId)
        if (findIndexOfCurrentId === -1) {
            cypMultiple.push(getCurrentId)
        } else {
            cypMultiple.splice(findIndexOfCurrentId, 1)
        }
        setMultiple(cypMultiple)

    }
    console.log(selected, multiple);
    return (
        <div className='wrapper'>
            <button onClick={() => setEnableMultiSelection(!enableMultiSelection) }>
                Enable Multi Selection
                </button>
            <div className='accordian'>
                {data && data.length > 0 ?
                data.map((dataItem) => (
                    <div className='item'>
                        <div key={dataItem.id} 
                        onClick={
                            enableMultiSelection 
                            ? () => handleMultiSelection(dataItem.id)
                            : () => handleSingleSelection(dataItem.id)}
                        className='title'>
                            
                            <h3>{dataItem.question}</h3>
                            <span>+</span>
                        </div>
                        {selected === dataItem.id || multiple.indexOf(dataItem.id) !== -1 ? 
                            <div className='content'>{dataItem.answer}</div>
                            : null
                        }

                    </div>

                ))
                
                : <div>No data found</div>}

            </div>

        </div>
    )
}