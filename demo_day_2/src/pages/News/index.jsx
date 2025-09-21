import { useState, useEffect } from "react";
import { Link } from "react-router";
function News() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => {
        return res.json();
      })
      .then((posts) => {
        setPosts(posts);
      })
      .finally(() => setLoading(false));
  }, []);

  console.log(posts);
  return (
    <div>
      <h1>News Page component</h1>
      <ul>
        {loading && <h1>Loading...</h1>}
        {posts.map((post, index) => {
          return (
            <li key={post.id}>
              <div> {post.id}</div>
              <Link to={`/news/${post.id}`}>
                {index + 1}.{post.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
export default News;
