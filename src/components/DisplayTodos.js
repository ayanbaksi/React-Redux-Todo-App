import React, { useState } from "react";
import {
  addTodos,
  completeTodos,
  removeTodos,
  updateTodos,
} from "../redux/reducer";
import TodoItem from "./TodoItem";
import { useSelector, useDispatch } from "react-redux";
import { AnimatePresence, motion } from "framer-motion";

const DisplayTodos = () => {
  const [sort, setSort] = useState("active");
  const dispatch = useDispatch();

  // Get the todos state from Redux store
  const todos = useSelector((state) => state.todos);
  console.log("todos", todos);

  // Define dispatch actions
  const handleRemoveTodo = (id) => {
    dispatch(removeTodos(id));
  };

  const handleUpdateTodo = (obj) => {
    dispatch(updateTodos(obj));
  };

  const handleCompleteTodo = (id) => {
    dispatch(completeTodos(id));
  };

  return (
    <div className="displaytodos">
      <div className="buttons">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setSort("active")}
        >
          Active
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setSort("completed")}
        >
          Completed
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setSort("all")}
        >
          All
        </motion.button>
      </div>
      <ul>
        <AnimatePresence>
          {todos.length > 0 && sort === "active"
            ? todos.map((item) => {
              return (
                item.completed === false && (
                  <TodoItem
                    key={item.id}
                    item={item}
                    removeTodo={handleRemoveTodo}
                    updateTodo={handleUpdateTodo}
                    completeTodo={handleCompleteTodo}
                  />
                )
              );
            })
            : null}
          {/* for completed items */}
          {todos.length > 0 && sort === "completed"
            ? todos.map((item) => {
              return (
                item.completed === true && (
                  <TodoItem
                    key={item.id}
                    item={item}
                    removeTodo={handleRemoveTodo}
                    updateTodo={handleUpdateTodo}
                    completeTodo={handleCompleteTodo}
                  />
                )
              );
            })
            : null}
          {/* for all items */}
          {todos.length > 0 && sort === "all"
            ? todos.map((item) => {
              return (
                <TodoItem
                  key={item.id}
                  item={item}
                  removeTodo={handleRemoveTodo}
                  updateTodo={handleUpdateTodo}
                  completeTodo={handleCompleteTodo}
                />
              );
            })
            : null}
        </AnimatePresence>
      </ul>
    </div>
  );
};

export default DisplayTodos;
