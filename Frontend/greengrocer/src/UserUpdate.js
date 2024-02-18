import { useEffect, useState} from "react";
import { Link, useNavigate } from "react-router-dom";
import {BsCart3, BsFillArchiveFill, BsGrid1X2Fill, BsMenuButtonWideFill, BsPeopleFill} from 'react-icons/bs'
import './AdminStyle.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import axios from "axios";
import SellerSidebar from "./SellerSidebar";
import SellerHeader from "./SellerHeader";
import UserSidebar from "./UserSidebar";
import UserHeader from "./UserHeader";
function UserUpdate() {

    const [openSidebarToggle, setOpenSidebarToggle] = useState(false)
    const navigate = useNavigate();
    const OpenSidebar = () => {
        setOpenSidebarToggle(!openSidebarToggle)
    }

    const [user,setUser]=useState({fullName:"",email:"",mobileNo:"",password:"",address:"",pinCode:"",city:"",state:""});
    
    const url=`http://127.0.0.1:8080/greengrocer/user/getUser/`+1;

    let myuid = sessionStorage.getItem("uid");
    const OnTextChange = (args)=>{
        var user1 = {...user};
        user1[args.target.name] = args.target.value;
        setUser(user1)
    }

    const ClearBoxes =()=>{
        setUser({fullName:"",email:"",mobileNo:"",password:"",address:"",pinCode:"",city:"",state:""});
    }

    const FetchRecords =() =>{
        axios.get(url).then((result)=>{
            setUser(result.data);
        })
    }
    

    const UpdateRecord =()=>{
        var updateurl = "http://127.0.0.1:8080/greengrocer/user/updateUser/"+1;

        axios.put(updateurl,user).then((result)=>{
            
           if(result.data.affectedRows!==undefined && 
              result.data.affectedRows > 0)
              {
                FetchRecords()                
              }
              navigate("/UserDashboard")
        });
    }

    useEffect(()=>{FetchRecords()},[])
    return ( 
       <div className='grid-container'>
        <UserSidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar}/>
        <UserHeader OpenSidebar={OpenSidebar}/>
        <main className='main-container'>
            <div className="table-responsive" id="updateSeller">
                        <table className="table table-success table-striped-columns">
                            <tbody>
                                    <tr>
                                        <td>Full Name</td>
                                        <td>
                                        <input name="fullName"
                                        value={user.fullName} 
                                        onChange={OnTextChange}/>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Email</td>
                                        <td>
                                        <input name="email"
                                        value={user.email} 
                                        onChange={OnTextChange}/>
                                        </td>
                                    </tr>   
                                     <tr>
                                        <td>Mobile Number</td>
                                        <td>
                                        <input name="mobileNo"
                                        value={user.mobileNo} 
                                        onChange={OnTextChange}/>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Password</td>
                                        <td>
                                        <input name="password"
                                        value={user.password} 
                                        onChange={OnTextChange}/>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Address</td>
                                        <td>
                                        <input name="address"
                                        value={user.address} 
                                        onChange={OnTextChange}/>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Pincode</td>
                                        <td>
                                        <input name="pinCode"
                                        value={user.pinCode} 
                                        onChange={OnTextChange}/>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>City</td>
                                        <td>
                                        <input name="city"
                                        value={user.city} 
                                        onChange={OnTextChange}/>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>State</td>
                                        <td>
                                        <input name="state"
                                        value={user.state} 
                                        onChange={OnTextChange}/>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td colSpan={2}>
                                        <center>
                                        <button className="btn btn-success" 
                                        onClick={UpdateRecord}>
                                            Update
                                        </button>
                                        </center>
                                        </td>
                                    </tr>
                                </tbody>
                        </table>
            </div>
        </main>
        
       </div> 
     );
}

export default UserUpdate;