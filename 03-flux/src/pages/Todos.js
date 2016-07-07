import React from 'react';

export class default Todos extends React.Component {
    constructor(){
        super();

        this.state {
            todos: [
                {
                    id: 1,
                    text: "Bring out the gimp",
                    complete: false
                },
                {
                    id: 2,
                    text: "There should be an equal ammount of blue berries in each muffin",
                    complete: true
                },
                {
                    id: 3,
                    text: "Look under the bed",
                    complete: false
                }
            ]
        };
    }

    render() {
        const {todos} = this.state;

        const TodoComponents = todos.map((todo) => {
            return <Todo key={todo.id} />
        });

        return (
            <div>
                <h1>Todos</h1>
                <ul>{TodoComponents}</ul>
            </div>
        );
    }
}