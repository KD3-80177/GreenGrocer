import React from "react";
import { BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill, BsFillBellFill}
 from 'react-icons/bs'
 import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line } 
 from 'recharts';
 import { useState,useEffect } from "react";
 import { useNavigate } from "react-router-dom";
import axios from "axios";
function DeliveryBoyHome(){
    
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false);
  const navigate = useNavigate();
  const OpenSidebar = () => {setOpenSidebarToggle(!openSidebarToggle)
}
        const[orderDetails,setOrderDetails] = useState([]);
         
        const url="http://127.0.0.1:8080/deliveryboy/getOrders/1";
    
    const FetchRecords =() =>{
        axios.get(url).then((result)=>{
            setOrderDetails(result.data);
        })
    }

  
    useEffect(()=>{FetchRecords()},[]);
        
      return (
      
        
        <main className="main-container">
          <div className="table-responsive">
          <table className="table table-bordered">
            <thead>
              <tr>
                <th>Order Id</th>
                <th>Full name</th>
                <th>Address</th>
                <th>City</th>
                <th>Mobile No</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {
               orderDetails.map((order)=>{
                return (<tr key={order.aoid}>
                  <td>{order.oid}</td>
                  <td>{order.fullName}</td>
                  <td>{order.address}</td>
                  <td>{order.city}</td>
                  <td>{order.mobile}</td>
                </tr>)

               })
              }
            </tbody>
          </table>
          </div>

        </main>
       
      )
        
    
}
export default DeliveryBoyHome;