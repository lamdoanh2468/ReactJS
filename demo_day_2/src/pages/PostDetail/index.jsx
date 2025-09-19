import { useParams } from "react-router";

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
        })
        .finally(() => setLoading(false));
    }, []);
  }, 2000);
  return (
    <div>
      <h1>{post.title}</h1>
      <div>{JSON.stringify(post)}</div>
    </div>
  );
}
export default PostDetail;
