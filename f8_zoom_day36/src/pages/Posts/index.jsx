import { useState } from "react";

function Posts() {
  const [loading, setLoading] = useState(true);
  const [posts, setPosts] = useState([]);
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((res) => res.json())
    .then((posts) => setPosts(posts))
    .finally(() => setLoading(false));

  return (
    <>
      {loading && <div>Loading...</div>}
      <ul>{posts.map((post) => {})}</ul>
    </>
  );
}
export default Posts;
