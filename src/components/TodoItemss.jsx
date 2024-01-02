import React from "react";
import TodoItem from "../components/TodoItem";
function TodoItemss({ todoItems, onDeleteClick }) {
  return (
    <>
      <div className="items-dontainer row">
        {todoItems.map((item, index) => (
          <TodoItem
            key={index}
            todoName={item.name}
            todoDate={item.DueDate}
            onDeleteClick={onDeleteClick}
          />
        ))}
      </div>
    </>
  );
}

export default TodoItemss;
