import { useState, useEffect } from "react";

function Comments() {
  const [uniqueID, setUniqueID] = useState(501); // set tạm số lớn hơn vì API trả về ~500 comments
  const [inputValue, setInputValue] = useState("");
  const [loading, setLoading] = useState(true);
  const [comments, setComments] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    setComments([
      ...comments,
      {
        id: uniqueID,
        name: "lamdoanh",
        email: "lamdoanh2468@gmail.com",
        body: inputValue,
      },
    ]);
    setUniqueID(uniqueID + 1);
    setInputValue("");
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/comments?postId=1")
      .then((res) => res.json())
      .then((comments) => setComments(comments))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p>Loading comments...</p>;

  return (
    <div>
      <ul>
        {comments.map((comment) => (
          <li key={comment.id}>
            Avatar:{" "}
            <img
              src={`https://ui-avatars.com/api/?name=${comment.name}`}
              alt={comment.name}
              width="40"
              height="40"
            />
            <br />
            Name: {comment.name}
            <br />
            Email: {comment.email}
            <br />
            Body comment: {comment.body}
            <br />
            Time: 1 hour ago
          </li>
        ))}
      </ul>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Want to add new comments???"
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default Comments;
