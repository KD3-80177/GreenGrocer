import { useState,useEffect} from "react";
import { Link,useNavigate,useParams} from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";



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
            
        <html>

        <center>
        <div className="container" style={{height:200,width:500,textAlign:"center",margin:50 }} >
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
        
  </center>
  <div class="pass" style={{textAlign:"center" ,margin:"100"}}> Forget Password
  <input type="submit" name="" value="Reset Pass"></input>
  </div>
  </html>
  );
      
}


export default UserLogin;