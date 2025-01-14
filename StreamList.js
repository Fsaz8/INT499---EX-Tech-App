import React, { useState } from 'react';

function StreamList() {
  const [movie, setMovie] = useState('');
  const [list, setList] = useState([]);
  const [editingIndex, setEditingIndex] = useState(null);
  const [editedMovie, setEditedMovie] = useState('');

  const handleAdd = () => {
    if (movie.trim() !== '') {
      setList([...list, { name: movie, completed: false }]);
      console.log(`Movie Added: ${movie}`);
      setMovie('');
    }
  };

  const handleDelete = (index) => {
    setList(list.filter((_, i) => i !== index));
  };

  const handleComplete = (index) => {
    setList(
      list.map((item, i) =>
        i === index ? { ...item, completed: !item.completed } : item
      )
    );
  };

  const handleEdit = (index) => {
    setEditingIndex(index);
    setEditedMovie(list[index].name);
  };

  const handleSaveEdit = () => {
    setList(
      list.map((item, i) =>
        i === editingIndex ? { ...item, name: editedMovie } : item
      )
    );
    setEditingIndex(null);
    setEditedMovie('');
  };

  return (
    <div>
      <h1>StreamList</h1>
      <input
        type="text"
        value={movie}
        onChange={(e) => setMovie(e.target.value)}
        placeholder="Enter movie name"
      />
      <button onClick={handleAdd}>Add to List</button>
      <ul>
        {list.map((item, index) => (
          <li key={index} style={{ textDecoration: item.completed ? 'line-through' : 'none' }}>
            {editingIndex === index ? (
              <>
                <input
                  type="text"
                  value={editedMovie}
                  onChange={(e) => setEditedMovie(e.target.value)}
                />
                <button onClick={handleSaveEdit}>Save</button>
              </>
            ) : (
              <>
                <span>{item.name}</span>
                <button onClick={() => handleEdit(index)}>Edit</button>
              </>
            )}
            <button onClick={() => handleComplete(index)}>
              {item.completed ? 'Undo' : 'Complete'}
            </button>
            <button onClick={() => handleDelete(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default StreamList;
