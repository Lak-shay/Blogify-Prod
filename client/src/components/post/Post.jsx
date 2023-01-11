import "./post.css"
import { Link } from "react-router-dom";

export default function Post({ post }) {
  // PF stands for public folder
  const PF = "http://localhost:5000/images/";
  // console.log(post._id);
  return (
    <div className="post">
      {
        post.photo && (
          <img className="postImg" src={PF + post.photo} alt="Error loading image."></img>
        )
      }

      <div className="postInfo">
        {/* postCat means post Category */}
        <div className="postCats">
          {
            post.categories.map((c) => (
            <span className="postCat">{c.name}</span>
            ))
          }
        </div>

        {/* Dont use '' use `` in link tag. */}
        <Link to={`/post/${post._id}`} className="link">
          <span className="postTitle">{post.title}</span>
        </Link>

        <span className="postDate">{new Date(post.createdAt).toDateString()}</span>

        <p className="postDesc">{post.desc}</p>
      </div>
    </div>
  )
}
