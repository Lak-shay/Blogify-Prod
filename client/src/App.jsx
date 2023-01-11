import Topbar from "./components/topbar/Topbar";
import Home from "./pages/home/Home"
import About from "./pages/About/About";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Settings from "./pages/settings/Settings";
import Write from "./pages/Write/Write";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Single from "./pages/single/Single";
import { useContext } from "react";
import { Context } from "./context/Context";

function App() {
  const {user} = useContext(Context);
  return (
    <Router>
      <Topbar />
      <Routes>

        {/* when only "/" is called then only home should be called i.e why we did exact*/}
        <Route path="/" element={<Home/>} />

        <Route path="/posts" element={<Home />} />
        <Route path="/about" element={<About />} />

        {/* If user is registered then send to homepage else send to register page  */}
        <Route path="/register" element={user ? <Home /> : <Register />} />

        {/* If user is logged in then send to homepage else send to login page  */}
        <Route path="/login" element={user ? <Home /> : <Login />} />
        <Route path="/settings" element={user ? <Settings /> : <Register />} />

        {/* If user exits then send to write page else send to login page */}
        <Route path="/write" element={user ? <Write /> : <Login />} />
        <Route path="/post/:postId" element={<Single />} />
      </Routes>
    </Router>
  );
}

// function App() {
//   const currentUser = false;
//   return (
//     <Router>
//       <Topbar />
//       <Switch>
        
//         <Route exact path="/" component={<Home />} />

//         <Route path="/posts">
//           <Home />
//         </Route>

//         {/* If user is registered then send to homepage else send to register page  */}
//         <Route exact path="/register">
//           {currentUser ? <Home /> : <Register />}
//         </Route>

//         {/* If user is logged in then send to homepage else send to login page  */}
//         <Route exact path="/login">
//           {currentUser ? <Home /> : <Login />}
//         </Route>

//         {/* Open a single post which has a unique id which can uniquely identify that post. eg post/123 */}
//         <Route exact path="/post/:id">
//           <SinglePost />
//         </Route>

//         {/* If user exits then send to write page else send to login page */}
//         <Route exact path="/write">
//           {currentUser ? <Write /> : <Login />}
//         </Route>

//         <Route exact path="/settings">
//           {currentUser ? <Settings /> : <Login />}
//         </Route>

//       </Switch>
//     </Router>
//   );
// }

export default App;
