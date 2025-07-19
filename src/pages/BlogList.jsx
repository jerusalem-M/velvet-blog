import { useEffect, useState } from 'react';

export default function BlogList() {
  const [posts, setPosts] = useState([]);
  const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));

  useEffect(() => {
    const allPosts = JSON.parse(localStorage.getItem('posts')) || [];
    const userPosts = allPosts.filter(
      (post) => post.author === loggedInUser?.username
    );
    setPosts(userPosts);
  }, [loggedInUser?.username]); // 👈 ESLint dependency added

  const handleDelete = (id) => {
    const allPosts = JSON.parse(localStorage.getItem('posts')) || [];
    const updatedPosts = allPosts.filter((post) => post.id !== id);
    localStorage.setItem('posts', JSON.stringify(updatedPosts));
    const userPosts = updatedPosts.filter(
      (post) => post.author === loggedInUser?.username
    );
    setPosts(userPosts);
  };

  return (
    <div className="max-w-2xl mx-auto bg-white p-6 rounded shadow mt-10 text-nude">
      <h2 className="text-2xl font-bold mb-4">My Posts</h2>
      {posts.length > 0 ? (
        posts.map((post) => (
          <div key={post.id} className="mb-6 border-b border-nude pb-4">
            <h3 className="text-xl font-semibold">{post.title}</h3>
            <p className="mb-2">{post.content}</p>
            <button
              onClick={() => handleDelete(post.id)}
              className="bg-red-500 text-white py-1 px-3 rounded hover:opacity-80"
            >
              Delete
            </button>
          </div>
        ))
      ) : (
        <p>No posts yet. Create one!</p>
      )}
    </div>
  );
}
