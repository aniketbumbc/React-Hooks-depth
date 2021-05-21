import React, { useState } from 'react';

const ListArray = () => {
  const [items, setItems] = useState([]);
  const [name, setName] = useState('');

  const addItem = (e) => {
    e.preventDefault();
    setItems([
      ...items,
      {
        id: items.length,
        name: name,
      },
    ]);
    setName('');
  };

  return (
    <div>
      <h3>List Array </h3>
      <form onSubmit={addItem}>
        <label>
          <input
            type='text'
            name='item'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
      </form>
      <ul>
        {items.map((item, index) => (
          <li style={{ listStyle: 'none' }} key={index}>
            {item.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListArray;
