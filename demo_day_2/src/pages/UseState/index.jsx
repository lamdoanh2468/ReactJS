import { useState } from "react";
function Content() {
  return <h1>Content</h1>;
}

function UseState() {
  const [counter, setCounter] = useState(0);
  const [mounted, setMounted] = useState(false);

  //   const [value, setValue] = useState(() => expensiveLogic(1e9));
  //   console.log(value);
  // useEffect(() => {
  //   console.log("Callback is called ");
  // }, []);
  //? Callback dc gọi trong 2 conditions:
  //* Khi component 's mounted
  //TODO Khi component's re-render và 1 deps changed(=== comparision)
  // return (
  //
  // );
  return (
    <div>
      {mounted && <Content />}
      <button onClick={() => setMounted(!mounted)}>Toggle</button>
      <button
        onClick={() => {
          setCounter(() => counter + 1); //TODO
        }}
      >
        Counter is{counter}
      </button>
    </div>
  );
}
export default UseState;
