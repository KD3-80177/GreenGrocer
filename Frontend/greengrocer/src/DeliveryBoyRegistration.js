import { useState,useEffect } from "react";
import axios from "axios";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

function DeliveryBoyRegistration()
{
    const[deliveryboy,setDeliveryboy] = useState({fullName:"",mobileNo:"",email:"",password:"",address:"",city:"",state:"",pinCode:""});
    const[message,setMessage] = useState("");

    const url = "http://localhost:8080/deliveryboy/addDeliveryboy";

    const OnTextChange = (args) =>{
        var deliveryboy1 = {...deliveryboy};
        deliveryboy1[args.target.name] = args.target.value;
        setDeliveryboy(deliveryboy1);
    }

    const Reset = ()=>
    {
        setDeliveryboy({fullName:"",mobileNo:"",email:"",password:"",address:"",city:"",state:"",pinCode:""})
    }
    const showMessage = (msgText) =>{
        setMessage(msgText);
        window.setTimeout(()=>{
            setMessage("");
        },3000);
    }
    const saveDeliveryBoy=()=>{
       
        axios.post(url,deliveryboy)
        .then((result)=>{
            if(result.data.affectedRows !== undefined && result.data.affectedRows>0){
                showMessage("Customer Added Successfully!!!!!");
            }
            Reset();
        });
        
    }


    return(
        <center>
        <h1><strong>DeliveryBoy Registration</strong></h1>
    <div className="container">
    <div className="jumbotron">
            
        <div className="table-responsive">
            <table className="table table-dark table-striped"  style={{width:500,textAlign:"center"}}>
                <tbody>
                    <tr>
                        <td><b>Enter Full Name</b></td>
                        <td>
                            <input name="fullName"
                            value={deliveryboy.fullName}
                            required
                            onChange={OnTextChange}/>
                        </td>
                    </tr>
                    <tr>
                        <td><b>Enter Mobile</b></td>
                        <td>
                            <input name="mobileNo"
                            value={deliveryboy.mobileNo}
                            required
                            onChange={OnTextChange}/>
                        </td>
                    </tr>
                    <tr>
                        <td><b>Enter Email</b></td>
                        <td>
                            <input type="email" name="email"
                            value={deliveryboy.email}
                            required
                            onChange={OnTextChange}/>
                        </td>
                    </tr>
                    <tr>
                        <td><b>Enter Password</b></td>
                        <td>
                            <input type="password" name="password"
                            value={deliveryboy.password}
                            required
                            onChange={OnTextChange}/>
                        </td>
                    </tr>
                    <tr>
                        <td><b>Enter Address</b></td>
                        <td>
                            <input name="address"
                            value={deliveryboy.address}
                            required
                            onChange={OnTextChange}/>
                        </td>
                    </tr>
                    <tr>
                        <td><b>Enter City</b></td>
                        <td>
                            <input name="city"
                            value={deliveryboy.city}
                            required
                            onChange={OnTextChange}/>
                        </td>
                    </tr>
                    <tr>
                        <td><b>Enter State</b></td>
                        <td>
                            <input name="state"
                            value={deliveryboy.state}
                            required
                            onChange={OnTextChange}/>
                        </td>
                    </tr>
                    <tr>
                        <td><b>Enter Pincode</b></td>
                        <td>
                            <input name="pinCode"
                            value={deliveryboy.pinCode}
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
                            <button className="btn btn-success" onClick = {saveDeliveryBoy}>
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
}

export default DeliveryBoyRegistration;