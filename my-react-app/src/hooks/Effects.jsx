import React, { useEffect, useState } from 'react';

const Effects = () => {
  const [count, setCount] = useState(0);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users') // 'users' not 'user'
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  return (
    <div>
      <h1>🧮 Count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>➕ Increment</button>

      <h2>👥 Users List</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Effects;
