import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home.jsx';
import Login from './pages/Login.jsx';
import Register from './pages/Register.jsx';
import Navbar from './components/Navbar';
import CreatePost from './pages/CreatePost.jsx';
import BlogList from './pages/BlogList.jsx';

function App() {
  return (
    <BrowserRouter>
      <div className="bg-dimwhite text-nude min-h-screen p-4">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/create" element={<CreatePost />} />
          <Route path="/posts" element={<BlogList />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
