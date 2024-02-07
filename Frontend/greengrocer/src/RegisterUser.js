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

    const Reset = ()=>
    {
        setUser({fullName:"",mobileNo:"",email:"",password:"",address:"",city:"",state:"",pinCode:""})
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
                showMessage("Customer Added Successfully!!!!!");
                Reset();
            }
        });
        
    }

return(
    <center>
        <h1><strong>Registration</strong></h1>
    <div className="container">
    <div className="jumbotron">
            
        <div className="table-responsive">
            <table className="table table-dark table-striped"  style={{width:500,textAlign:"center"}}>
                <tbody>
                    <tr>
                        <td><b>Enter Full Name</b></td>
                        <td>
                            <input name="fullName"
                            value={user.fullName}
                            required
                            onChange={OnTextChange}/>
                        </td>
                    </tr>
                    <tr>
                        <td><b>Enter Mobile</b></td>
                        <td>
                            <input name="mobileNo"
                            value={user.mobileNo}
                            required
                            onChange={OnTextChange}/>
                        </td>
                    </tr>
                    <tr>
                        <td><b>Enter Email</b></td>
                        <td>
                            <input type="email" name="email"
                            value={user.email}
                            required
                            onChange={OnTextChange}/>
                        </td>
                    </tr>
                    <tr>
                        <td><b>Enter Password</b></td>
                        <td>
                            <input type="password" name="password"
                            value={user.password}
                            required
                            onChange={OnTextChange}/>
                        </td>
                    </tr>
                    <tr>
                        <td><b>Enter Address</b></td>
                        <td>
                            <input name="address"
                            value={user.address}
                            required
                            onChange={OnTextChange}/>
                        </td>
                    </tr>
                    <tr>
                        <td><b>Enter City</b></td>
                        <td>
                            <input name="city"
                            value={user.city}
                            required
                            onChange={OnTextChange}/>
                        </td>
                    </tr>
                    <tr>
                        <td><b>Enter State</b></td>
                        <td>
                            <input name="state"
                            value={user.state}
                            required
                            onChange={OnTextChange}/>
                        </td>
                    </tr>
                    <tr>
                        <td><b>Enter Pincode</b></td>
                        <td>
                            <input name="pinCode"
                            value={user.pinCode}
                            required
                            onChange={OnTextChange}/>
                        </td>
                    </tr>
                    <tr>

                         <td>
                            <button className="btn btn-primary" onClick={Reset}>
                                    Reset
                            </button>
                        </td>
                        <td>
                            <button className="btn btn-success" onClick = {saveUser}>
                                    Register
                            </button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
    </div>
    </center>
)
};

export default RegisterUser;