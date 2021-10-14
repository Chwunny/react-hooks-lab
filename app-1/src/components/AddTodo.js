import React from 'react'

const AddTodo = (props) => {
    return (
        <div>
            <form action="Submit" onSubmit={(e) => props.updateTodoList(e)}>
                <input value={props.state} type="text" placeholder="Add an item" onChange={(e) => props.setState(e.target.value)}/>
                <button>Submit</button>
            </form>
        </div>
    )
}

export default AddTodo
