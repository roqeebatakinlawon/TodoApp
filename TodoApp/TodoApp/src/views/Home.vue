<template>
    <div class="container">
      <input v-model="searchQuery" placeholder="Search todos..." class="input" />
      <div class="add-todo">
        <input v-model="newTodo" placeholder="Add a new todo..." class="input" />
        <button @click="addTodo" class="btn">Add Todo</button>
      </div>
  
      <div v-for="todo in paginatedTodos" :key="todo.id" class="todo-item">
        <strong>{{ todo.title }}</strong>
        <button @click="deleteTodo(todo.id)" class="delete">Delete</button>
      </div>
  
      <div class="pagination">
        <button
          v-for="page in totalPages"
          :key="page"
          @click="currentPage = page"
          :class="{ active: currentPage === page }"
        >{{ page }}</button>
      </div>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        todos: [],
        searchQuery: '',
        newTodo: '',
        currentPage: 1,
        perPage: 10,
      };
    },
    computed: {
      filteredTodos() {
        return this.todos.filter(todo =>
          todo.title.toLowerCase().includes(this.searchQuery.toLowerCase())
        );
      },
      paginatedTodos() {
        const start = (this.currentPage - 1) * this.perPage;
        return this.filteredTodos.slice(start, start + this.perPage);
      },
      totalPages() {
        return Math.ceil(this.filteredTodos.length / this.perPage);
      },
    },
    methods: {
      async fetchTodos() {
        const res = await axios.get('https://jsonplaceholder.typicode.com/todos');
        this.todos = res.data.slice(0, 210); // simulates 21 pages
      },
      addTodo() {
        if (this.newTodo.trim()) {
          this.todos.unshift({ id: Date.now(), title: this.newTodo });
          this.newTodo = '';
        }
      },
      deleteTodo(id) {
        this.todos = this.todos.filter(todo => todo.id !== id);
      },
    },
    mounted() {
      this.fetchTodos();
    },
  };
  </script>
  
  <style>
  .container {
    max-width: 800px;
    margin: auto;
    padding: 20px;
  }
  .input {
    width: 100%;
    padding: 10px;
    margin: 10px 0;
    border: 1px solid #ccc;
    border-radius: 5px;
  }
  .btn {
    background-color: #2196f3;
    color: white;
    border: none;
    padding: 10px 15px;
    margin-left: 10px;
    cursor: pointer;
  }
  .delete {
    background-color: #f44336;
    color: white;
    border: none;
    padding: 5px 10px;
    margin-left: 10px;
    cursor: pointer;
  }
  .todo-item {
    background: #f9f9f9;
    padding: 10px;
    margin: 5px 0;
    display: flex;
    justify-content: space-between;
  }
  .pagination button {
    background: #2196f3;
    color: white;
    border: none;
    margin: 5px;
    padding: 8px 12px;
    cursor: pointer;
  }
  .pagination .active {
    background: #0b7dda;
    font-weight: bold;
  }
  </style>
  