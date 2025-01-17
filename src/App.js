import "./App.css";
import Navbar from "./components/Navbar/Navbar"
import Home from "./pages/Home"
import {Routes,Route} from "react-router-dom"
import Login from "./pages/Login"
import RequiredAuth from "./hoc/RequiredAuth";
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/home" element={
          <RequiredAuth>
            <Home/>
          </RequiredAuth>
        }></Route>
        <Route path="/login" element={<Login/>}></Route>
      </Routes>
    
  
    </div>
  );
}

export default App;
