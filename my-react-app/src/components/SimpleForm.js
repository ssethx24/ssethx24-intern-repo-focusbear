// src/components/SimpleForm.js
import React, { useState } from 'react';

export default function SimpleForm() {
  const [text, setText] = useState('');
  const [items, setItems] = useState([]);

  const handleAdd = () => {
    if (text.trim() === '') return; // avoid empty entries
    setItems([...items, text]);
    setText('');
  };

  return (
    <div style={{ padding: '1rem', border: '1px solid #ccc', marginTop: '1rem' }}>
      <h2>Simple Form</h2>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter item"
      />
      <button onClick={handleAdd} style={{ marginLeft: '0.5rem' }}>
        Add
      </button>

      <ul style={{ marginTop: '1rem' }}>
        {items.map((item, index) => (
          <li key={index}>{item}</li> // using index as key for now
        ))}
      </ul>
    </div>
  );
}
// This component allows users to enter text and add it to a list.
// It uses local state to manage the input and the list of items.   