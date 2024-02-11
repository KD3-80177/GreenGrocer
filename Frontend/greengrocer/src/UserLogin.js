import { useState,useEffect} from "react";
import { Link,useNavigate,useParams} from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import {Form  ,Item,Input,BreadcrumbItemPropsnput,message, Typography, Divider} from "antd"; 
import "./style.css";


function UserLogin() {

   

    const url = "http://localhost:8080/user/login";
    const[message,setMessage] = useState("");
    const[loginDetails,setLoginDetails] = useState({email:"",password:""});

    const handleChange = (event,field) =>{
        let actualVal = event.target.value;
        setLoginDetails({
            ...loginDetails,
            [field]:actualVal
        })
    }

    const Reset = () =>{
        setLoginDetails({
            email:"",
            password:""
        })
    }

    const DoLogin = ()=>
    {
        console.log(loginDetails);
        if(loginDetails.email === null){
            toast.error("Email is required");
        }
        if(loginDetails.password === null){
            toast.error("Password is required");
        }

        axios.post(url,loginDetails)
            .then((result)=>
            result.data)

        // axios.get(newUrl).then((result)=>{
        //     var validUser = result.data;
           
        //     if(validUser!= null)
        //     {
        //         console.log("Found!!!");
        //         setTimeout(()=>
        //         {
        //             console.log(validUser);       
        //         },6000);
        //     }
        //   
        // });
        //
        //<div className='alert alert-warning'>{message}</div>
    }
   
    return (
            
       

        <center>
        {/* <div className="container" style={{height:200,width:500,textAlign:"center",margin:50 }} >
            <h1><strong>User Login  </strong></h1>
         <div className="jumbotron" style={{height:200,width:500,textAlign:"center",margin:0}}>

        <div className="table-responsive" >
            <table 
               className="table"
               style={{width:500,textAlign:"center",}} >
            <tbody>
            
            
                <tr>
                    <td>User Name: </td>
                    <td>
                        <input type='text'
                               name="email" 
                               value={loginDetails.email}
                               onChange={(e)=>handleChange(e,'email')}/>
                    </td>
                </tr>
            
                <tr>
                    <td>Password: </td>
                    <td>
                        <input type='password'
                               name="password" 
                               value={loginDetails.password}
                               onChange={(e)=>handleChange(e,'password')}/>
                    </td>
                </tr>
                
                 <tr>
                    <td><button
                           className='btn btn-primary' onClick={DoLogin}>Login</button></td>
                    
                    <td>
                       <button 
                       className='btn btn-primary' onClick={Reset}>Reset</button>
                    </td>
                </tr>
                
            </tbody>
        </table>
        
        </div>
        </div>
        </div>
    */}
         
        <div className="appBg">
        <form className="loginForm">
          <Typography.Title>Welcome Back!</Typography.Title>
          <Form.Item 
          rules={[
            {
              required:true,
              type:"email",
              message:"Please Enter Valid Email!!"
            },
              ]} label="Email" name={'email'}>
            <Input required placeholder="Enter your email" 
                            name="email" 
                            type="email"
                            value={loginDetails.email}
                            onChange={(e)=>handleChange(e,'email')} />
          </Form.Item>
          <Form.Item rules={[
            {
              required:true,
              message:"Please Enter Valid Password!!"
            },
               ]}label="Password" name={'password'}>
            <Input.Password  required placeholder="Enter your password" 
                                      type='password'
                                      name="password" 
                                      value={loginDetails.password}
                                      onChange={(e)=>handleChange(e,'password')} />
          </Form.Item>
          <button className="btn btn-primary" type="submit" style={{display:"block"}} onClick={DoLogin} >
            Login
          </button>
          
          <Divider style={{borderColor:'black'}}></Divider>
        </form>
    </div>
          {/* <div class="pass" style={{textAlign:"center" ,margin:"100"}}> Forget Password
  <input type="submit" name="" value="Reset Pass"></input>
  </div> */}
  </center>
 
 
  );
      
}


export default UserLogin;