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
    <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-md mt-12 text-darkbrown">
      <h2 className="text-3xl font-bold mb-6 tracking-wide">Create Post</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <input
          className="w-full p-3 border border-darkbrown rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-nude"
          type="text"
          placeholder="Post Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <textarea
          className="w-full p-3 border border-darkbrown rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-nude"
          rows="6"
          placeholder="Your content..."
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
        />
        <button
          type="submit"
          className="bg-darkbrown text-#4b3329 py-2 px-6 rounded-lg hover:bg-[#4b3329] transition-all shadow-md"
        >
          Publish
        </button>
      </form>
    </div>
  );
}
