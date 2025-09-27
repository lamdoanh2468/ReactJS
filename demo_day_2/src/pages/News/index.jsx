import { useState, useEffect } from "react";
import { Link, useSearchParams } from "react-router";

function News() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [params, setParams] = useSearchParams();
  const [page, setPage] = useState(() => params.get("page") || 1);
  console.log(params.get("page"));
  useEffect(() => {
    setLoading(true); // mỗi lần đổi page thì reset loading
    fetch(`https://jsonplaceholder.typicode.com/posts?_limit=10&_page=${page}`)
      .then((res) => res.json())
      .then((posts) => setPosts(posts))
      .finally(() => setLoading(false));
  }, [page]);
  useEffect(() => {
    setParams(page <= 1 ? "" : { page }); //* if page =1 then hidden number page
  }, [page, setParams]);
  return (
    <div style={{ padding: "20px", fontFamily: "sans-serif" }}>
      <h1>News Page</h1>

      <ul style={{ listStyle: "none", padding: 0 }}>
        {loading && <h2>Loading...</h2>}
        {posts.map((post) => (
          <li key={post.id} style={{ marginBottom: "10px" }}>
            <Link
              to={`/news/${post.id}`}
              style={{ textDecoration: "none", color: "#333" }}
            >
              <strong>{post.id}.</strong> {post.title}
            </Link>
          </li>
        ))}
      </ul>

      {/* pagination */}
      <ul
        style={{
          display: "flex",
          justifyContent: "center",
          listStyle: "none",
          padding: 0,
          marginTop: "20px",
          gap: "8px",
        }}
      >
        {Array(10)
          .fill()
          .map((_, index) => {
            const pageNumber = index + 1;
            return (
              <li
                key={index}
                onClick={() => setPage(pageNumber)}
                style={{
                  border: "1px solid #333",
                  borderRadius: "6px",
                  padding: "6px 12px",
                  cursor: "pointer",
                  backgroundColor: page === pageNumber ? "#333" : "#fff",
                  color: page === pageNumber ? "#fff" : "#333",
                  transition: "0.2s",
                }}
              >
                {pageNumber}
              </li>
            );
          })}
      </ul>
    </div>
  );
}

export default News;
