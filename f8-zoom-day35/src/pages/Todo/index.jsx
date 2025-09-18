import { useState } from "react";
function ToDo() {
const [inputValue,setInputValue] = useState('');
const [todos,setTodos]=useState([]);
const [completedSum,setCompletedSum]=useState(0);
const[uniqueId,setUniqueId]=useState(0);
let sum = todos.length;
const handleInputChange = (e)=>{setInputValue(e.target.value)};
const handleRemove = (id)=>setTodos(todos.filter((todo)=>{return todo.id!=id}));
const handleSubmit = (e)=>{
e.preventDefault();
if(inputValue.trim()){
setTodos([...todos,{id:uniqueId+1,text:inputValue,
completed:false}]);
setUniqueId(uniqueId+1)
setInputValue("");
}
}
const remainder = sum - completedSum;
return (
<div>
    <form onSubmit={handleSubmit}>
    <input value={inputValue}
        onChange={handleInputChange}
        placeholder="Nhập task mới..." />
    <ul>
        
    {todos.length==0?<h2>Chưa có task nào. Hãy thêm task đầu
        tiên!</h2>:
    todos.map((todo) => (
        <li key={todo.id}>{todo.completed?<s>{todo.text} </s>:todo.text}
        <input type="checkbox"
        checked ={todo.completed} 
        onChange={
        () =>{setTodos(todos.map(t=>t.id===todo.id?{...t,completed:!t.completed}:t));
            setCompletedSum(todo.completed ? completedSum-1 : completedSum+1);
        }
        }
        />
        <input type="button" value="Remove" onClick={()=>{handleRemove(todo.id);
        setCompletedSum(completedSum-1);
        }} />
        </li>
    ))}
    </ul>
    <button type="submit">Add</button>
    </form>
    <h2>Summary: {sum} {sum>1?"tasks":"task"} - Completed:{completedSum} - Remainder:{remainder}</h2>
</div>
);
}
export default ToDo
