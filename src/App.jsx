import React, { useState } from "react";
import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";

import TodoItemss from "./components/todoItemss";
import WelcomeMsg from "./components/WelcomeMsg";

function App() {
  // const initialtodoItems = [
  //   {
  //     name: "By Milk",
  //     DueDate: "4/12/2023",
  //   },
  //   {
  //     name: "Go To College",
  //     DueDate: "10/12/2023",
  //   },
  //   {
  //     name: "Go To Gym",
  //     DueDate: "1/1/2024",
  //   },
  // ];

  const [todoItems, setTodoItems] = useState([]);

  const handleNewItem = (itemName, itemDueDate) => {
    setTodoItems((currentItem) => [
      ...currentItem,
      { name: itemName, DueDate: itemDueDate },
    ]);
  };
  const handleDeleteTodo = (todoItemName) => {
    const newItems = todoItems.filter((item) => item.name !== todoItemName);
    setTodoItems(newItems);
  };

  return (
    <>
      <center className="todo-container row ">
        <AppName />
        <AddTodo onNewClick={handleNewItem} />
        <WelcomeMsg todoItems={todoItems} />
        <TodoItemss todoItems={todoItems} onDeleteClick={handleDeleteTodo} />
      </center>
    </>
  );
}
2;
export default App;
