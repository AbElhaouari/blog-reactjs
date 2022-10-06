// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";
import Login from "./Components/Login";
import Register from "./Components/Register";
import CreatePost from "./Components/CreatePost";
import Profile from "./Components/Profile";
import axios from "axios";
import { useEffect, useState } from "react";
import LoginCheck from "./Components/LoginCheck";
import Page from "./Components/Page";

function App() {
  axios.defaults.withCredentials = true;
  const [loggedin, setLoggedin] = useState(false);
  const [user, setUser] = useState("");
  const getUser = async () => {
    axios.get("http://localhost:3001/login").then((data) => {
      if (data.data.logged) {
        setLoggedin(true);
        setUser(data.data.user[0]);
      } else {
        setLoggedin(false);
      }
    });
  };
  useEffect(() => {
    getUser();
  }, []);
  console.log(user);
  return (
    <div className="App ">
      <nav className="bg-cyan-500 flex flex-row justify-between items-center mx-auto w-full p-9 text-white text-xl  ">
        <div className="mr-9 ">
          <a href="/">Home</a>
        </div>
        <div className="mr-9 ">
          <a href="/page">p</a>
        </div>
        {!loggedin ? (
          <>
            <div className="ml-auto">
              <a href="/login">Login</a>
            </div>
            <div className="mr-9 ml-6">
              <a href="/register">Register</a>
            </div>
          </>
        ) : (
          <>
            <div className="mr-auto">
              <a href="/create-post">Create post</a>
            </div>
            <div className="mr-9">
              <a href="/profile">Profile</a>
            </div>
          </>
        )}
      </nav>

      <Router>
        <Routes>
          <Route path="/create-post" element={<CreatePost />} />
          <Route path="/page" element={<Page />} />

          <Route path="/login" element={<Login />} />

          <Route path="/register" element={<Register />} />
          <Route path="/profile" element={<Profile user={user} />} />
        </Routes>
      </Router>
    </div>
  );
}
export default App;
