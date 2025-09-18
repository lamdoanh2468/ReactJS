
import './App.css'
import Home from "../src/pages/Home/index"
import Counter from "../src/pages/Counter/index"
import Todo from "../src/pages/Todo/index"
import Profile from "../src/pages/Profile/index"
import Products from "../src/pages/Products/index"
import Comments from "../src/pages/Comments/index"
import Weather from "../src/pages/Weather/index"
import Buttons from "../src/pages/Buttons/index"
import Navigation from './components/Navigation'

import { BrowserRouter as Router,Routes,Route} from "react-router"
function App() {
  return (
    <Router>
    <Navigation/>
 
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/counter" element={<Counter/>}></Route>
          <Route path="/todo" element={<Todo/>}></Route>
          <Route path="/profile" element={<Profile/>}></Route>
          <Route path="/products" element={<Products/>}></Route>
          <Route path="/comments" element={<Comments/>}></Route>
          <Route path="/weather" element={<Weather/>}></Route>
          <Route path="/buttons" element={<Buttons/>}></Route>

        </Routes>
      
    </Router>
  )
}

export default App
