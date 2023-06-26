import React from "react";

export default function TodoFooter({ todos, onClearCompleted }) {
  const ComplitedSize = todos.filter((todo) => todo.isCompleted).length;
  return (
    <div>
      <span>
        {ComplitedSize}/{todos.length} Completed
      </span>
      <button onClick={onClearCompleted}>Clear Completed</button>
    </div>
  );
}
