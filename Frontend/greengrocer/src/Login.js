import { useState,useEffect } from "react";
import { Link,useNavigate,useParams } from "react-router-dom";
import GreenGrocerService from './Services/greengrocer.service';

const Login = () =>{

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
                    id="email"
                    onChange={(e)=>setEMail(e.target.value)}
                    placeholder="Enter Email Address Here"></input>
                </div>
                <hr/>
                <div className="form-group">
                    <input
                    type="password"
                    className="form-control col-4"
                    id="password"
                    onChange={(e)=>setPassword(e.target.value)}
                    placeholder="Enter Password Here"></input>
                </div>
            </form>
        </div>
      );
}


export default Login;