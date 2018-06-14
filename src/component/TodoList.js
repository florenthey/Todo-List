import React, { Component } from 'react'
import '../style/TodoList.css';

class TodoList extends Component {


    state = {
        userInput:'',
        items: []
      }
    
//récupère la saisie de l'utilisateur
    onChange = (event) => {
        this.setState( { userInput : event.target.value } )

    }

//récupère le tableau initial et lui assigne une nouvelle valeur
    addTodo = (event) => {
        event.preventDefault();
        this.setState({
            userInput:'',
            items: [...this.state.items, this.state.userInput],
        }, console.log(this.items));
    }
      

//récupère le tableau et affiche un item et un bouton pour chaque items
    renderTodos = () => {

        return this.state.items.map((item, index) => {

            return (
                <li key={index}> {item}
                    <button onClick={ this.deleteTodos.bind(this, index) }>
                    <i class="far fa-trash-alt"></i></button>
                </li>
            )
        })
    }

    
    deleteTodos = (index) => {
      
        const array = this.state.items;
        array.splice(index, 1);
        this.setState({
            items: array
        });
      }


    render() {

        return(

            <div>
              <h1>Ma Todo List</h1>
                <form className='form-row align-items-center'>
                    <input 
                    value={ this.state.userInput } 
                    type='text' 
                    placeholder='Renseigner un item'
                    onChange={ this.onChange }
                    className='form-control mb-2' />
                    <button 
                    onClick={ this.addTodo } 
                    className='btn btn-primary'>Ajouter</button>
                </form>
                <div className='list-group'>
                  { this.renderTodos() }
                </div>
            </div>
        )

    }

}

export default TodoList;