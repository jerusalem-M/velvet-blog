import { useState } from 'react';

export default function CreatePost() {
  const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!loggedInUser) return alert('Please login to create a post.');

    const existingPosts = JSON.parse(localStorage.getItem('posts')) || [];
    const newPost = {
      id: Date.now(),
      title,
      content,
      author: loggedInUser.username,
    };

    localStorage.setItem('posts', JSON.stringify([...existingPosts, newPost]));
    alert('Post created!');
    setTitle('');
    setContent('');
  };

  return (
    <div className="max-w-xl mx-auto bg-white p-6 rounded shadow mt-10 text-nude">
      <h2 className="text-2xl font-bold mb-4">Create Post</h2>
      <form onSubmit={handleSubmit}>
        <input
          className="w-full mb-4 p-2 border border-nude rounded"
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <textarea
          className="w-full mb-4 p-2 border border-nude rounded"
          rows="5"
          placeholder="Your content..."
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
        />
        <button className="bg-nude text-white py-2 px-4 rounded hover:opacity-80">
          Publish
        </button>
      </form>
    </div>
  );
}
