import React from 'react'

const Todo = (props) => {
    const { item } = props
    return (
        <div>
            <h2>{item}</h2>
        </div>
    )
}

export default Todo
