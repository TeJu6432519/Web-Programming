import { useEffect, useState } from "react";

const UserPosts = ({ userId }) => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch(`/api/posts?userId=${userId}`);
        const data = await response.json();
        setPosts(data.length > 0 ? data : generateRandomPosts());
      } catch (error) {
        console.error("Error fetching posts:", error);
        setPosts(generateRandomPosts());
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, [userId]);

  const generateRandomPosts = () => {
    return Array.from({ length: 5 }, (_, i) => ({
      id: i + 1,
      title: `Random Post ${i + 1}`,
      body: "This is a randomly generated post description."
    }));
  };

  return (
    <div>
      {loading ? (
        <p>Loading posts...</p>
      ) : posts.length > 0 ? (
        posts.map((post) => (
          <div key={post.id} style={{ border: "1px solid #ccc", padding: "10px", marginBottom: "10px" }}>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
          </div>
        ))
      ) : (
        <p>No posts found.</p>
      )}
    </div>
  );
};

export default UserPosts;
