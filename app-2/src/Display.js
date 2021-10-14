import React from 'react'


const Display = (props) => {

    return (
        <div>
            <h2>{props.upperCase(props.item)}</h2>
        </div>
    )
}

export default Display
