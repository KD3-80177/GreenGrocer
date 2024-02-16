import react, { useEffect, useState } from 'react'
import axios from 'axios';

import { BsFillArchiveFill, BsPeopleFill } from 'react-icons/bs'
import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import SellerSidebar from './SellerSidebar';
import SellerHeader from './SellerHeader';


function SellerHome()
{

    const [openSidebarToggle, setOpenSidebarToggle] = useState(false)

    const OpenSidebar = () => {
        setOpenSidebarToggle(!openSidebarToggle)
    }

    const [orders,setOrders]=useState([]);
    
    const url=`http://127.0.0.1:8080/seller/getSellerOrders/${1}`
    
    const FetchRecords =() =>{
        axios.get(url).then((result)=>{
            setOrders(result.data);
        })
    }

    useEffect(()=>{FetchRecords()},[])

    return(
            <main className='main-container'>
            <div className="table-responsive">
                        <table className="table table-success table-striped-columns">
                            <thead>
                               <tr>
                                 <th>Order Id</th> 
                                 <th>User Id</th>
                                 <th>User Name</th>
                                 <th>Product Id</th>
                                 <th>Product Name</th>
                                 <th>Quantity </th>
                                 <th>Action </th>
                               </tr>
                            </thead>
                            <tbody>
                                {
                                    orders.map((order)=>{
                                        return (<tr key={order.pid}>
                                            <td>{order.oid}</td>
                                            <td>{order.user.uid}</td>
                                            <td>{order.user.userName}</td>
                                            <td>{order.product.pid}</td>
                                            <td>{order.product.pname}</td>
                                            <td>{order.quantity}</td>
                                            <td><button className='btn btn-success'>Edit</button></td>
                                           {/* <td>
                                         <button className="btn  
                                            btn-danger"  
                                            onClick={()=>{
                                                RemoveRecord(emp.No)
                                            }}>
                                                 
                                                Remove
                                            </button>
                                        </td>*/}
                                        </tr>);
                                    })
                                }
                            </tbody>
                        </table>
            </div>
            </main>
    )
}
export default SellerHome