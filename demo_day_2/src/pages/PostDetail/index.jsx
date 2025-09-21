import { useState, useEffect } from "react";
//TODO Importing USE-PARAMS FROM react-dom
import { useParams } from "react-router-dom";

function PostDetail() {
  const [post, setPost] = useState(null);
  const params = useParams();
  console.log(params);
  useEffect(() => {
    setTimeout(() => {
      fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`)
        .then((res) => res.json())
        .then((post) => {
          setPost(post);
        });
    }, 2000);
  }, [params.id]);
  return (
    <div>
      <h1>{post.title}</h1>
      <div>{JSON.stringify(post)}</div>
    </div>
  );
}
export default PostDetail;
