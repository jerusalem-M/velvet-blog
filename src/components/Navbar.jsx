import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="bg-dimwhite text-darkbrown p-4 flex gap-6 shadow-sm rounded-b-md">
      <Link className="hover:underline font-semibold" to="/">Home</Link>
      <Link className="hover:underline font-semibold" to="/login">Login</Link>
      <Link className="hover:underline font-semibold" to="/register">Register</Link>
      <Link className="hover:underline font-semibold" to="/create">Create</Link>
      <Link className="hover:underline font-semibold" to="/posts">My Posts</Link>
    </nav>
  );
}
