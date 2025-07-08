import React, { useState } from 'react';

function TodoList() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');

  const addTodo = () => {
    if (input.trim() === '') return;
    setTodos([...todos, { id: Date.now(), text: input, done: false }]);
    setInput('');
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const toggleDone = (id) => {
    setTodos(todos.map(todo => todo.id === id ? { ...todo, done: !todo.done } : todo));
  };

  const fetchTodos = () => {
    fetch('https://jsonplaceholder.typicode.com/todos?_limit=5')
      .then(response => response.json())
      .then(data => {
        const initialTodos = data.map(item => ({
          id: item.id,
          text: item.title,
          done: item.completed
        }));
        setTodos(initialTodos);
      });
  };

  return (
    <div>
      <h2>Todo List</h2>
      <input
        type="text"
        placeholder="Add new todo"
        value={input}
        onChange={e => setInput(e.target.value)}
        onKeyDown={e => { if (e.key === 'Enter') addTodo(); }}
      />
      <button onClick={addTodo}>Add</button>
      <button onClick={fetchTodos}>Load Sample Todos</button>
      <ul>
        {todos.map(todo =>
          <li key={todo.id} style={{ textDecoration: todo.done ? 'line-through' : 'none' }}>
            <input type="checkbox" checked={todo.done} onChange={() => toggleDone(todo.id)} />
            {todo.text}
            <button onClick={() => deleteTodo(todo.id)}>Delete</button>
          </li>
        )}
      </ul>
    </div>
  );
}

export default TodoList;

