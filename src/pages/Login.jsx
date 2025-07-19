import { useState } from 'react';

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const users = JSON.parse(localStorage.getItem('users')) || [];
    const foundUser = users.find(
      (user) => user.username === username && user.password === password
    );

    if (foundUser) {
      localStorage.setItem('loggedInUser', JSON.stringify(foundUser));
      alert('Login successful!');
      setUsername('');
      setPassword('');
      setError('');
      // Optionally redirect or show personalized content here
    } else {
      setError('Invalid username or password');
    }
  };

  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded shadow mt-10 text-nude">
      <h2 className="text-2xl font-bold mb-4">Login</h2>
      {error && <p className="text-red-500 mb-2">{error}</p>}
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
          Login
        </button>
      </form>
    </div>
  );
}
