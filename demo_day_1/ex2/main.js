// Header Component
function Header({title}) {
  return <header>{title}</header>;
}

// Button Component
function Button({title,target,onClick,children}) {
  return <button onClick={onClick}>{title}</button>;
}
 var number = 1;
function Counter(){
  const [value,setValue ]= React.useState(0);
  console.log(number++);
  return <>
  <h2>{value}</h2> 
  <button onClick={()=>setValue(value+1)}>Increase</button>
  <button onClick={()=>setValue(value-1)}>Decrease</button>
  {/* setValue is mean RECALL FUNCTION BUT UPDATE STATE  */}
  </>
}
function UsersList(){
  const [users,setUsers] = React.useState([]);
  const [loading,setLoading]=React.useState(true);
  //?useEffect(Param1,Param2)
  /*
  ?Lần 1 : khi component được mounted
  *Lần 2 : học sau...
   */
  React.useEffect(()=>{
      setTimeout(()=>{
          fetch("https://jsonplaceholder.typicode.com/users")
          .then((res)=>res.json())
          .then((users)=>{setUsers(users)})
          .finally(()=>setLoading(false))
      },3000);
  },[]);
  return <><ul>
      {loading&&<li>Loading...</li>}//!loading must true(DEFAULT) to display on screen
      //?loading = false is not displayed on web
      {users.map((user)=><li key={user.id}>{user.username} - {user.email}</li>)}
    </ul></>
}
/**
 * const header = React.createElement()
 * ==> const header = <Header/>
 * 
 * 
 * 
 */
// const button = React.createElement(Button, null, null);
// const data ={
//  name :"Nguyen Van A",
//  title:"Something",
//  age:18
// }
// const handleClick = ()=>console.log("Yeah!!!");
const app = (
  <>
  <h1>Counter App</h1>
  <Counter/>
  <h1>Users List</h1>
  <UsersList/>
  </>
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(app);
