import "./topbar.css"
import { Link } from 'react-router-dom';
import { useContext } from "react";
import { Context } from "../../context/Context";

export default function Topbar() {
    // User exists
    const { user, dispatch } = useContext(Context);
    const handleLogout = () => {
        dispatch({ type: "LOGOUT" });
    };
    const PF = "http://localhost:5000/images/";

    return (

        <div className='top'>
            <div className="topLeft">
                <Link to={"/"} className="link">
                    <span className="topLeftHeading">BLOGIFY</span>
                </Link>

            </div>
            <div className="topCenter">
                <ul className="topList">
                    <li className="topListItems">
                        <Link className="link" to="/">
                            HOME
                        </Link>
                    </li>
                    <li className="topListItems">
                        <Link className="link" to="/about">
                            ABOUT
                        </Link>
                    </li>
                    <li className="topListItems">
                        <Link className="link" to="#">
                            CONTACT
                        </Link>
                    </li>
                    <li className="topListItems">
                        <Link className="link" to="/write">
                            WRITE
                        </Link>
                    </li>
                    <li className="topListItems" onClick={handleLogout}>
                        {user && "LOGOUT"}
                    </li>
                </ul>
            </div>
            <div className="topRight">
                {user ? (
                    <Link to="/settings">
                        <img className="topImg" src={PF + user.profilePic} alt="" />
                    </Link>
                ) : (
                    <ul className="topList">
                        <li className="topListItems">
                            <Link className="link" to="/login">
                                LOGIN
                            </Link>
                        </li>
                        <li className="topListItems">
                            <Link className="link" to="/register">
                                REGISTER
                            </Link>
                        </li>
                    </ul>
                )}
                <i class="fa-solid fa-magnifying-glass topSearchIcon"></i>
            </div>
        </div>
    )
}
