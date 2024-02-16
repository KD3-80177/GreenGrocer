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

    const [products,setProducts]=useState([]);
    
    const url=`http://127.0.0.1:8080/seller/sellerProducts/${1}`
    
    const FetchRecords =() =>{
        axios.get(url).then((result)=>{
            setProducts(result.data);
        })
    }

    useEffect(()=>{FetchRecords()},[])
    
    return(
            <main className='main-container'>
                <div className="table-responsive" id='addProductTable'>
                    <table className="table table-bordered">
                        <tbody>
                            <tr><td><strong>Product Name</strong></td><td><input type="text" value="" readOnly/></td></tr>
                            <tr><td><strong>Quantity</strong></td><td><input type="number" value=""/></td></tr>
                            <tr>
                            <td colSpan={2}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                <button className='btn btn-success' >Add</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
                                <button className='btn btn-warning'>Update</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                <button className='btn btn-primary'>Reset</button>
                            </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <hr/>
            <div className="table-responsive">
                        <table className="table table-success table-striped-columns">
                            <thead>
                               <tr>
                                 <th>Product Id</th> 
                                 <th>Product Name</th>
                                 <th>Price</th>
                                 <th>Quantity</th>
                                 <th>Action</th>
                                 </tr>
                            </thead>
                            <tbody>
                                {
                                    products.map((product)=>{
                                        return (<tr key={product.pid}>
                                            <td>{product.pid}</td>
                                            <td>{product.pname}</td>
                                            <td>{product.price}</td>
                                            <td>{product.availableQuantity}</td>
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