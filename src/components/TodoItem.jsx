import React from "react";
import { MdDeleteForever } from "react-icons/md";
function TodoItem({ todoName, todoDate, onDeleteClick }) {
  return (
    <>
      <div className="col-4 my-2">{todoName}</div>
      <div className="col-4 my-2">{todoDate}</div>
      <div className="col-4 my-2 ">
        <button
          className="btn btn-danger px-4"
          onClick={() => onDeleteClick(todoName)}
        >
          <MdDeleteForever />
        </button>
      </div>
    </>
  );
}

export default TodoItem;
