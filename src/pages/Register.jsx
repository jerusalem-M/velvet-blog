import { useState } from 'react';

export default function Register() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const existingUsers = JSON.parse(localStorage.getItem('users')) || [];
    const newUser = { username, password };

    localStorage.setItem('users', JSON.stringify([...existingUsers, newUser]));

    alert('Registration successful!');
    setUsername('');
    setPassword('');
  };

  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded shadow mt-10 text-nude">
      <h2 className="text-2xl font-bold mb-4">Register</h2>
      <form onSubmit={handleSubmit}>
        <input
          className="w-full mb-4 p-2 border border-nude rounded"
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <input
          className="w-full mb-4 p-2 border border-nude rounded"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button className="bg-nude text-white py-2 px-4 rounded hover:opacity-80">
          Register
        </button>
      </form>
    </div>
  );
}
