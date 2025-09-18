import { useState,useEffect } from "react";
function Modal({ isOpen, onClose, children }) {
  const [visible, setVisible] = useState(isOpen);

  useEffect(() => {
    if (isOpen) {
      setVisible(true);
    } else {
      // đợi 300ms cho animation fadeOut xong rồi mới unmount
      const timer = setTimeout(() => setVisible(false), 300);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  if (!visible) return null;

  return (
    <div className={`modal ${isOpen ? "fade-in" : "fade-out"}`} onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button
          onClick={onClose}
          style={{
            float: "right",
            border: "none",
            background: "transparent",
            fontSize: "18px",
            cursor: "pointer",
          }}
        >
          ✖
        </button>
        {children}
      </div>
    </div>
  );
}


  function ProductItem({ post }) {
    const [open, setOpen] = useState(false);

    return (
      <li>
        <h3>{post.title.charAt(0).toUpperCase() + post.title.slice(1)}</h3>
        <p>{post.body.slice(0, 100)}...</p>
        <button onClick={() => setOpen(true)}>See details</button>

        <Modal isOpen={open} onClose={() => setOpen(false)}>
          <h2>{post.title.charAt(0).toUpperCase() + post.title.slice(1)}</h2>
          <p>{post.body}</p>
        </Modal>
      </li>
    );
  }

  function Product() {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      setTimeout(() => {
        fetch("https://jsonplaceholder.typicode.com/posts?_limit=12")
          .then((res) => res.json())
          .then((posts) => setPosts(posts))
          .finally(() => setLoading(false));
      }, 1000);
    }, []);

    return (
      <ul>
        {loading && <li>Loading...</li>}
        {posts.map((post) => (
          <ProductItem key={post.id} post={post} />
        ))}
      </ul>
    );
  }
export default Product
