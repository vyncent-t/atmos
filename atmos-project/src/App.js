import React from 'react';
import Todo from './components/Todo'

function App() {
    return (
        <div>
            <h1>My Todos</h1>
            <Todo text="wake up" />
            <Todo text="brush teeth" />
            <Todo text="eat breakfast" />


        </div>
    )
}

export default App;