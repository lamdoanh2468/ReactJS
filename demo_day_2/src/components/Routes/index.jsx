import { BrowserRouter as Router,Routes,Route} from "react-router"
import Home from "../../pages/Home"
import News from "../../pages/News"
import Contact from "../../pages/Contact"
import Navigation from "../../layouts/Nagivation/index"

function AppRoutes(){
    return <Router>
           <Navigation/>
            <Routes>
                {/* //TODO Must include Route */}
                <Route path="/" element={<Home/>}/>
                <Route path="/news" element={<News/>}/>
                <Route path="/contact" element={<Contact/>}/>
            </Routes>
            </Router>
}
export default AppRoutes