import React, { Component } from 'react';

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
    renderTodos() {
        return this.state.items.map((items) => {
            return (
                <div key={items}>
                  {items} | <button onClick={this.deleteTodos}>x</button>
                </div>
            )
        })
    }

    
    deleteTodos = (event) => {
      event.preventDefault();
      const array = this.state.items;
      const index = array.indexOf(event.target.value);
      array.splice(index, 1);
      this.setState({
          items: array
      });
    }

    render() {

        return(

            <div>
              <h1>Ma Todo List</h1>
                <form>
                    <input 
                    value={ this.state.userInput } 
                    type='text' 
                    placeholder='Renseigner un item'
                    onChange={ this.onChange } />
                    <button onClick={ this.addTodo }>Ajouter</button>
                </form>
                <div>
                  { this.renderTodos() }
                </div>
            </div>
        )

    }

}

export default TodoList;