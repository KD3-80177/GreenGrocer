import { useState, useEffect } from "react";
//import GreenGrocer from '../Services/greengrocer.service';
import axios from "axios";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

function RegisterUser(){
    
    const [user, setUser] = useState({fullName:"",mobileNo:"",email:"",password:"",address:"",city:"",state:"",pinCode:""});
    const [message,setMessage] = useState("");

    const url = "http://localhost:8080/user/newUser";

    const OnTextChange = (args) =>{
        var user1 = {...user};
        user1[args.target.name] = args.target.value;
        setUser(user1);
    }

    const showMessage = (msgText) =>{
        setMessage(msgText);
        window.setTimeout(()=>{
            setMessage("");
        },3000);
    }
    const saveUser=()=>{
        axios.post(url,user)
        .then((result)=>{
            if(result.data.affectedRows !== undefined && result.data.affectedRows>0){
                showMessage("Record added");
            }
        });
        
    }

return(
    <div className="container">
        <hr></hr>
        <div className="table-responsive">
            <table className="table table-bordered">
                <tbody>
                    <tr>
                        <td>Enter Full Name</td>
                        <td>
                            <input name="fullName"
                            value={user.fullName}
                            onChange={OnTextChange}/>
                        </td>
                    </tr>
                    <tr>
                        <td>Enter Mobile</td>
                        <td>
                            <input name="mobileNo"
                            value={user.mobileNo}
                            onChange={OnTextChange}/>
                        </td>
                    </tr>
                    <tr>
                        <td>Enter Email</td>
                        <td>
                            <input name="email"
                            value={user.email}
                            onChange={OnTextChange}/>
                        </td>
                    </tr>
                    <tr>
                        <td>Enter Password</td>
                        <td>
                            <input name="password"
                            value={user.password}
                            onChange={OnTextChange}/>
                        </td>
                    </tr>
                    <tr>
                        <td>Enter Address</td>
                        <td>
                            <input name="address"
                            value={user.address}
                            onChange={OnTextChange}/>
                        </td>
                    </tr>
                    <tr>
                        <td>Enter City</td>
                        <td>
                            <input name="city"
                            value={user.city}
                            onChange={OnTextChange}/>
                        </td>
                    </tr>
                    <tr>
                        <td>Enter State</td>
                        <td>
                            <input name="state"
                            value={user.state}
                            onChange={OnTextChange}/>
                        </td>
                    </tr>
                    <tr>
                        <td>Enter Pincode</td>
                        <td>
                            <input name="pinCode"
                            value={user.pinCode}
                            onChange={OnTextChange}/>
                        </td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>
                            <button className="btn btn-primary" onClick = {saveUser}>
                                    Register
                            </button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
)
};

export default RegisterUser;