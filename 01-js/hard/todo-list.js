/*
  Implement a class `Todo` having below methods
    - add(todo): adds todo to list of todos
    - remove(indexOfTodo): remove todo from list of todos
    - update(index, updatedTodo): update todo at given index
    - getAll: returns all todos
    - get(indexOfTodo): returns todo at given index
    - clear: deletes all todos

  Once you've implemented the logic, test your code by running
*/

class Todo {
  constructor() {
    this.todo = [];
  }

  add(task) {
    this.todo.push(task);
  }

  remove(taskIndex) {
    if (taskIndex >= 0 && taskIndex < this.todo.length) {
      this.todo.splice(taskIndex, 1);
    } 
  }

  update(index, updatedTodo) {
    if (index >= 0 && index < this.todo.length) {
      this.todo[index] = updatedTodo;
    } 
  }

  getAll() {
    return this.todo;
  }

  get(indexOfTodo) {
    if (indexOfTodo >= 0 && indexOfTodo < this.todo.length) {
      return this.todo[indexOfTodo];
    } 
  }

  clear() {
    this.todo = [];
  }
}

module.exports = Todo;
