import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="bg-dimwhite text-nude p-4 flex gap-4">
      <Link className="hover:underline" to="/">Home</Link>
      <Link className="hover:underline" to="/login">Login</Link>
      <Link className="hover:underline" to="/register">Register</Link>
      <Link className="hover:underline" to="/create">Create</Link>
      <Link className="hover:underline" to="/posts">My Posts</Link>
    </nav>
  );
}
