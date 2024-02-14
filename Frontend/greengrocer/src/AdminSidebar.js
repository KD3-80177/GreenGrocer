import react from 'react'
import {BsCart3, BsFillArchiveFill, BsGrid1X2Fill, BsMenuButtonWideFill, BsPeopleFill} from 'react-icons/bs'
import './AdminStyle.css'

function AdminSidebar({openSidebarToggle, OpenSidebar})
{
    return(
        <aside id="sidebar" className={openSidebarToggle ? "sidebar-responsive":""}>
        <div className='sidebar-title'>
            <div className='sidebar-brand'>
                <BsCart3 className='icon_header'/> GreenGrocer
            </div>
            <span className='icon close_icon' onClick={OpenSidebar}>X</span>
        </div>

            <ul className='sidebar-list'>
                <li className='sidebar-list-item'>
                    <a href="">
                        <BsGrid1X2Fill className='icon'/>Admin Dashboard
                    </a>
                </li>
                <li className='sidebar-list-item'>
                    <a href="">
                        <BsFillArchiveFill className='icon'/>Products
                    </a>
                </li>
                <li className='sidebar-list-item'>
                    <a href="">
                        <BsPeopleFill className='icon'/>Customers
                    </a>
                </li>
                <li className='sidebar-list-item'>
                    <a href="">
                        <BsPeopleFill className='icon'/>Sellers
                    </a>
                </li>
                <li className='sidebar-list-item'>
                    <a href="">
                        <BsPeopleFill className='icon'/>Delivery Boys
                    </a>
                </li>
                <li className='sidebar-list-item'>
                    <a href="">
                        <BsMenuButtonWideFill className='icon'/>Reports
                    </a>
                </li>
            </ul>
        </aside>
    )
}
export default AdminSidebar