import React, { useState } from "react";

export default function TodoForm({ onAdd }) {
  const [text, setText] = useState("");
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if (text !== "") {
          return onAdd(text);
        }
        setText("");
      }}
    >
      <input
        type="text"
        value={text}
        onChange={(e) => {
          setText(e.target.value);
        }}
      />
      <button>Add</button>
    </form>
  );
}
