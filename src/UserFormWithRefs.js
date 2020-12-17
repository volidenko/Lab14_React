import React from 'react';

export default function UserFormWithRefs() {
    let nameRef = React.createRef();
    const handleSubmit = e => {
        e.preventDefault();
        alert(`Name: ${nameRef.current.value}`);
    }
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Name:</label>
                <input type="text" placeholder="Enter name:" ref={nameRef}></input>
            </div>
            <input type="submit" value="Отправить"></input>
        </form>
    )
}