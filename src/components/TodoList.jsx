import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Pagination from "./Pagination";


const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [filteredTodos, setFilteredTodos] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [todosPerPage] = useState(10);
  const [searchQuery, setSearchQuery] = useState("");
  const [newTodo, setNewTodo] = useState("");

  // Fetch todos from API
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((data) => {
        setTodos(data);
        setFilteredTodos(data);
      });
  }, []);

  // Filter todos based on search query
  useEffect(() => {
    const filtered = todos.filter((todo) =>
      todo.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredTodos(filtered);
    setCurrentPage(1);
  }, [searchQuery, todos]);

  // Add a new todo
  const handleAddTodo = () => {
    if (newTodo.trim() === "") return;

    const newTodoItem = {
      id: todos.length + 1,
      title: newTodo,
      completed: false,
    };

    setTodos([newTodoItem, ...todos]);
    setFilteredTodos([newTodoItem, ...filteredTodos]);
    setNewTodo("");
  };

  // Delete a todo
  const handleDeleteTodo = (id) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
    setFilteredTodos(updatedTodos);
  };

  // Pagination logic
  const indexOfLastTodo = currentPage * todosPerPage;
  const indexOfFirstTodo = indexOfLastTodo - todosPerPage;
  const currentTodos = filteredTodos.slice(indexOfFirstTodo, indexOfLastTodo);

  return (
    <div className="container">
     

      {/* Search Bar */}
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search todos..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      {/* Add New Todo */}
      <div className="add-todo">
        <input
          type="text"
          placeholder="Add a new todo..."
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
        />
        <button onClick={handleAddTodo}>Add Todo</button>
      </div>

      {/* Todo List */}
      <ul className="todo-list">
        {currentTodos.length > 0 ? (
          currentTodos.map((todo) => (
            <li key={todo.id}>
              <Link to={`/todos/${todo.id}`}>{todo.title}</Link>
              <button
                className="delete-btn"
                onClick={() => handleDeleteTodo(todo.id)}
              >
                Delete
              </button>
            </li>
          ))
        ) : (
          <p>No todos match your search.</p>
        )}
      </ul>

      {/* Pagination */}
      <Pagination
        totalTodos={filteredTodos.length}
        todosPerPage={todosPerPage}
        paginate={setCurrentPage}
      />
    </div>
  );
};

export default TodoList;
