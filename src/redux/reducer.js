import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todos: [],
};

const addTodoReducer = createSlice({
  name: "todos",
  initialState,
  reducers: {
    // Adding todos
    addTodos: (state, action) => {
      state.todos.push(action.payload); // Directly modify the todos array
    },
    // Remove todos
    removeTodos: (state, action) => {
      state.todos = state.todos.filter((item) => item.id !== action.payload); // Directly modify state.todos
    },
    // Update todos
    updateTodos: (state, action) => {
      const index = state.todos.findIndex((todo) => todo.id === action.payload.id); // Find index of the todo to update
      if (index !== -1) {
        state.todos[index].item = action.payload.item; // Directly update the todo item
      }
    },
    // Mark todo as completed
    completeTodos: (state, action) => {
      const index = state.todos.findIndex((todo) => todo.id === action.payload); // Find index of the todo to complete
      if (index !== -1) {
        state.todos[index].completed = true; // Directly mark as completed
      }
    },
  },
});

export const {
  addTodos,
  removeTodos,
  updateTodos,
  completeTodos,
} = addTodoReducer.actions;
export const reducer = addTodoReducer.reducer;
