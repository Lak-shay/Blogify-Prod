import "./home.css"
import Header from "../../components/header/Header"
import Posts from "../../components/posts/Posts"
import SideBar from "../../components/sidebar/Sidebar"
// see use of useEffect
import { useState, useEffect } from "react";
import axios from "axios"; 
import { useLocation } from "react-router-dom";

// include the header component here
export default function Home() {
  const [posts, setPosts] = useState([]);
  // here search will record the query part of the url which will be the author name of the form '/?user=userName'
  const {search} = useLocation();

  useEffect(() => {
    const fetchPosts = async () => {
      // we'll display all the posts or the post of a particular author.
      const res = await axios.get("http://localhost:5000/api/posts/" + search);
      setPosts(res.data);
    };
    fetchPosts();
  }, [search])

  return (
      <>
        <Header />
        <div className="home">
          <Posts posts={posts}/>
          <SideBar />
        </div>
      </>
      
  )
}
