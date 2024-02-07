import { useState,useEffect} from "react";
import { Link,useNavigate,useParams} from "react-router-dom";
import axios from "axios";



function Login() {

   

    const url = "http://localhost:8080/user/login";
    const[message,setMessage] = useState("");
    const[email,setEmail] = useState("");
    const[password,setPassword] = useState("");

   const DoLogin = ()=>
   {
      
        const newUrl = url  + "/" + email+ "/"+ password;
        axios.get(newUrl).then((result)=>{
            var validUser = result.data;
           
            if(validUser!= null)
            {
                console.log("Found!!!");
                setTimeout(()=>
                {
                    console.log(validUser);       
                },6000);
            }

        });
   }
   useEffect(() => {
    const newUrl = url  + "/" + email+ "/"+ password;
    fetch(newUrl)
     .then((response) => response.json())
     .then((actualData) => console.log(actualData))
     .catch((err) => {
      console.log(err.message);
     });
   }, []);
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
                               onChange={(e)=>setEmail(e.target.value)}/>
                    </td>
                </tr>
                <tr>
                    <td>Password</td>
                    <td>
                        <input type='password'
                               name="password" 
                               onChange={(e)=>setPassword(e.target.value)}/>
                    </td>
                </tr>
                 <tr>
                    <td></td>
                    <td>
                       <button className='btn btn-primary' onClick={DoLogin}>Login</button>
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