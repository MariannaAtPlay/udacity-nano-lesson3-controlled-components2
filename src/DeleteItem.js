import React from 'react';

const DeleteItem = (props) => {
    return (
        <button onClick={props.handleDelete} disabled={props.buttonDisabled}>
            Delete Last Item
        </button>
    );
}

export default DeleteItem;