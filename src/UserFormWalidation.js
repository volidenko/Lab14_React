import React, {Component} from 'react';

export default class UserFormValidation extends Component{
    state={name:"", age: 0};
    render(){
        const handleSubmit=e=>{
            e.preventDefault();
            alert(`Name: ${this.state.name}, ${this.state.age} years old`);
        }
        const handleNameChanged=e=>{
            let name=e.target.value;
            if (name.toLowerCase()==="test"){
                alert("You should choose another name!");
                this.setState({name: ""});
            }
            else
            this.setState({name: name});
        }
        const handleAgeChanged=e=>{
            let newAge=e.target.value;
            if (newAge<0){
                alert("Age must be positive!");
                this.setState({age: 0});
            }
            else
            this.setState({age: newAge});
        }
        return (
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Name:</label>
                    <input type="text" placeholder="Enter name:" value={this.state.name} onChange={handleNameChanged}></input>
                </div>
                <div>
                    <label>Age:</label>
                    <input type="number" placeholder="Enter age:" value={this.state.age} onChange={handleAgeChanged}></input>
                </div>
                <input type="submit" value="Отправить"></input>
            </form>
        )
    }
}