import { Component } from "react";
import icon from './icon-routine.png'

export class DailyRoutine extends Component{
     state = {
        userInput: '',
        dailyschedule: []
     }

     onChangeEvent (e) {
        this.setState({userInput: e})
    }

    addItem (input){
        if (input === '') {
            alert("Please entre an item")
        }
        else{
            let listArray = this.state.dailyschedule;
            listArray.push(input)
            this.setState({dailyschedule: listArray, userInput: ''})
        }
    }

    deleteItem(){
        let listArray = this.state.dailyschedule
        listArray = []
        this.setState ({dailyschedule: listArray})
    }

    crossedWord(event) {
          const li = event.target;
          li.classList.toggle('crossed')
    }

    onFormSubmit(e) {
        e.preventDefault()
    }

     render(){
        return (
            <div>
                <form onSubmit={this.onFormSubmit}>
            <div className="Header">
                <input className="Input" type="text" placeholder="Today's schedule"
                 onChange={(e) => {this.onChangeEvent (e.target.value)}}
                 value={this.state.userInput}/>
            </div>

            <div className="Header">
                <button onClick={() => this.addItem (this.state.userInput)} className="btn Add">Add</button>
            </div>

            <ul>
               {this.state.dailyschedule.map ((item, index) => (
                <li onClick = {this.crossedWord} key={index}>
                <img src={icon} width='30px' alt="icon"/>
                    {item}
                </li>
               ))}
                
            </ul>

            <div className="Header">
                <button onClick={() => this.deleteItem ()} className="btn Delete">Delete</button>
            </div>
            </form>
        </div>
           
        )
     }
}