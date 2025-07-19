export default function Home() {
  const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));

  return (
    <div className="max-w-2xl mx-auto bg-white p-6 rounded shadow mt-10 text-nude">
      {loggedInUser ? (
        <>
          <h2 className="text-2xl font-bold mb-2">
            Welcome back, {loggedInUser.username}!
          </h2>
          <p className="mb-4">You're logged in and ready to start blogging.</p>
          {/* Later: Add buttons to create, view, or manage posts */}
        </>
      ) : (
        <>
          <h2 className="text-2xl font-bold mb-2">Velvet Blog</h2>
          <p className="mb-4">
            A cozy place to share your words. Please login or register to begin.
          </p>
        </>
      )}
    </div>
  );
}
