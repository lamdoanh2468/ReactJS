import { useParams, useNavigate } from "react-router";
import { useEffect, useState } from "react";
function PostDetail() {
  const [post, setPost] = useState(null);
  const params = useParams();
  const navigate = useNavigate();

  console.log(params);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`)
      .then((res) => {
        if (!res.ok) {
          navigate("/news", {
            replace: true,
          });
          return;
        }
        return res.json();
      })
      .then((post) => {
        setPost(post);
      });
  }, []);
  if (!post) return <div>Loading...</div>;
  return (
    <div>
      <h1>{post.title}</h1>
      <div>{post.body}</div>
    </div>
  );
}
export default PostDetail;
