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
  }, [loggedInUser?.username]);

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
    <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-lg mt-12 text-darkbrown">
      <h2 className="text-3xl font-bold mb-6 tracking-wide text-center">My Posts</h2>
      {posts.length > 0 ? (
        <div className="space-y-6">
          {posts.map((post) => (
            <div
              key={post.id}
              className="border border-darkbrown rounded-xl p-6 shadow-md bg-dimwhite overflow-hidden"
            >
              <h3 className="text-xl font-semibold mb-2 break-words">{post.title}</h3>
              <p className="mb-4 break-words whitespace-pre-wrap">{post.content}</p>
              <button
                onClick={() => handleDelete(post.id)}
                className="bg-darkbrown text-#4b3329 py-2 px-5 rounded"
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center text-lg">No posts yet. Create one!</p>
      )}
    </div>
  );
}
