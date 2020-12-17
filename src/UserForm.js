import React from 'react';

export default function UserForm() {
    const handleSubmit = event => {
        event.preventDefault();
        let uName = document.getElementById("userName");
        alert(`Name: ${uName.value}`);
    }
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Name:</label>
                <input type="text" placeholder="Enter name:" id="userName"></input>
            </div>
            <input type="submit" value="Отправить"></input>
        </form>
    )
}