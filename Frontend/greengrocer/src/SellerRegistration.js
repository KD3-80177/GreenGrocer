import { useState,useEffect } from "react";
import axios from "axios";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

function SellerRegistration()
{
    const[seller,setSeller] = useState({fullName:"",mobileNo:"",email:"",password:"",address:"",city:"",state:"",pinCode:""});
    const[message,setMessage] = useState("");

    const url = "http://localhost:8080/seller/newSeller";

    const OnTextChange = (args) =>{
        var seller1 = {...seller};
        seller1[args.target.name] = args.target.value;
        setSeller(seller1);
    }

    const Reset = ()=>
    {
        setSeller({fullName:"",mobileNo:"",email:"",password:"",address:"",city:"",state:"",pinCode:""})
    }
    const showMessage = (msgText) =>{
        setMessage(msgText);
        window.setTimeout(()=>{
            setMessage("");
        },3000);
    }
    const saveSeller=()=>{
       
        axios.post(url,seller)
        .then((result)=>{
            if(result.data.affectedRows !== undefined && result.data.affectedRows>0){
                showMessage("Customer Added Successfully!!!!!");
            }
            Reset();
        });
        
    }


    return(
        <center>
        <h1><strong>Seller Registration</strong></h1>
    <div className="container">
    <div className="jumbotron">
            
        <div className="table-responsive">
            <table className="table table-dark table-striped"  style={{width:500,textAlign:"center"}}>
                <tbody>
                    <tr>
                        <td><b>Enter Full Name</b></td>
                        <td>
                            <input name="fullName"
                            value={seller.fullName}
                            required
                            onChange={OnTextChange}/>
                        </td>
                    </tr>
                    <tr>
                        <td><b>Enter Mobile</b></td>
                        <td>
                            <input name="mobileNo"
                            value={seller.mobileNo}
                            required
                            onChange={OnTextChange}/>
                        </td>
                    </tr>
                    <tr>
                        <td><b>Enter Email</b></td>
                        <td>
                            <input type="email" name="email"
                            value={seller.email}
                            required
                            onChange={OnTextChange}/>
                        </td>
                    </tr>
                    <tr>
                        <td><b>Enter Password</b></td>
                        <td>
                            <input type="password" name="password"
                            value={seller.password}
                            required
                            onChange={OnTextChange}/>
                        </td>
                    </tr>
                    <tr>
                        <td><b>Enter Address</b></td>
                        <td>
                            <input name="address"
                            value={seller.address}
                            required
                            onChange={OnTextChange}/>
                        </td>
                    </tr>
                    <tr>
                        <td><b>Enter City</b></td>
                        <td>
                            <input name="city"
                            value={seller.city}
                            required
                            onChange={OnTextChange}/>
                        </td>
                    </tr>
                    <tr>
                        <td><b>Enter State</b></td>
                        <td>
                            <input name="state"
                            value={seller.state}
                            required
                            onChange={OnTextChange}/>
                        </td>
                    </tr>
                    <tr>
                        <td><b>Enter Pincode</b></td>
                        <td>
                            <input name="pinCode"
                            value={seller.pinCode}
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
                            <button className="btn btn-success" onClick = {saveSeller}>
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

export default SellerRegistration;