import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Login from "./Components/Login";
import Register from "./Components/Register";
import CreatePost from "./Components/CreatePost";
import Profile from "./Components/Profile";
function App() {
  return (
    <div className="App ">
      <nav className="bg-cyan-500 flex flex-row justify-between items-center mx-auto w-full p-9 text-white text-xl  ">
        <div className="mr-9 ">
          <a href="/">Home</a>
        </div>
        <div className="mr-auto">
          <a href="/create-post">Create post</a>
        </div>
        <div className="mr-9">
          <a href="/login">Login</a>
        </div>
        <div className="mr-9">
          <a href="/register">Register</a>
        </div>
        <div className="mr-9">
          <a href="/profile">Profile</a>
        </div>
      </nav>

      <Router>
        <Routes>
          <Route path="/create-post" element={<CreatePost />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
