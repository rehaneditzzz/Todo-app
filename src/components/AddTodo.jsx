import React, { useRef } from "react";
import { IoIosAddCircle } from "react-icons/io";
function AddTodo({ onNewClick }) {
  const todoNameElement = useRef();
  const dueDateElement = useRef();

  const handleAddClicked = (event) => {
    event.preventDefault();
    const todoName = todoNameElement.current.value;
    const DueDate = dueDateElement.current.value;

    todoNameElement.current.value = "";
    dueDateElement.current.value = "";
    onNewClick(todoName, DueDate);
  };

  return (
    <>
      <form className="addtodo-container row" onSubmit={handleAddClicked}>
        <div className="col-4  my-2">
          <input
            type="text"
            ref={todoNameElement}
            placeholder="Enter Item Here"
          />
        </div>
        <div className="col-4 my-2">
          <input type="date" ref={dueDateElement} />
        </div>
        <div className="col-4 my-2 ">
          <button className="btn btn-success px-4">
            <IoIosAddCircle />
          </button>
        </div>
      </form>
    </>
  );
}

export default AddTodo;
