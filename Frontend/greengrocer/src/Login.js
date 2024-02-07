import { useState,useEffect} from "react";
import { Link,useNavigate,useParams} from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";



function Login() {

   

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

        // });
    }
    return (
        <center>
        <div className='table-responsive'>
            <table className='table table-bordered'>
            <tbody>
                <tr>
                    <td>User Name</td>
                    <td>
                        <input type='text'
                               name="email" 
                               value={loginDetails.email}
                               onChange={(e)=>handleChange(e,'email')}/>
                    </td>
                </tr>
                <tr>
                    <td>Password</td>
                    <td>
                        <input type='password'
                               name="password" 
                               value={loginDetails.password}
                               onChange={(e)=>handleChange(e,'password')}/>
                    </td>
                </tr>
                 <tr>
                    <td></td>
                    <td>
                       <button className='btn btn-primary' onClick={DoLogin}>Login</button>
                    </td>
                    <td>
                       <button className='btn btn-primary' onClick={Reset}>Reset</button>
                    </td>
                </tr>
            </tbody>
        </table>
        <div className='alert alert-warning'>{message}</div>
        </div>
  </center>
  );
      
}


export default Login;