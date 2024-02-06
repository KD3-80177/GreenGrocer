import { useState,useEffect } from "react";
import { Link,useNavigate,useParams } from "react-router-dom";

function Login() {

    const url = "http://localhost:8080/user/login";
    const [email,setEMail] = useState('');
    const [passord,setPassword] = useState('');
    return (
        <div className="container">
            <h3>
                Login
            </h3>
            <hr/>
            <form>
                <div className="form-group">
                    <input
                    type="text"
                    className="form-control col-4"
                    name="email"
                    onChange={(e)=>setEMail(e.target.value)}
                    placeholder="Enter Email Address Here"></input>
                </div>
                <hr/>
                <div className="form-group">
                    <input
                    type="password"
                    className="form-control col-4"
                    name="password"
                    onChange={(e)=>setPassword(e.target.value)}
                    placeholder="Enter Password Here"></input>
                </div>
                <div>
                    <button
                    className="btn btn-primary" onClick={Login}>Login</button>
                </div>
            </form>
        </div>
      );
}


export default Login;