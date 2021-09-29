import React from 'react'
import './topnav.css'
import Dropdown from '../dropdown/Dropdown'
import { Link } from 'react-router-dom'
import user_menu from '../../assets/JsonData/user_menus.json'
import user_image from '../../assets/images/clipkart.png'
import notifications from '../../assets/JsonData/notification.json'
import 'boxicons'
<script src="https://unpkg.com/boxicons@latest/dist/boxicons.js"></script>

const curr_user = {
    display_name: 'Tuat Tran',
    image: user_image
}

const renderNotificationItem = (item, index) => (
    <div className="notification-item" key={index}>
        <i className={item.icon}></i>
        <span>{item.content}</span>
    </div>
)

const renderUserToggle = (user) => (
    <div className="topnav__right-user">
        <div className="topnav__right-user__image">
            <img src={user.image} alt="" />
        </div>
        <div className="topnav__right-user__name">
            {user.display_name}
        </div>
    </div>
)

const renderUserMenu =(item, index) => (
    <Link to='/' key={index}>
        <div className="notification-item">
            <i className={item.icon}></i>
            <span>{item.content}</span>
        </div>
    </Link>
)

const TopNav = () => {
    return (
       <div className="topnav">
           <div className="topnav__search">
                <input type="text" placeholder="Search Here..." />
                <box-icon name='search-alt-2'></box-icon>
                <i class='bx bx-search-alt-2'></i>
           </div>
           <div className="topnave__right">
               <div className="topnave__right-item">
                   {/*dropdown here */}
                   <Dropdown
                      customToggle={() => renderUserToggle(curr_user)}
                      contentData={user_menu}
                        renderItems={(item, index) => renderUserMenu(item, index)}
                   />       
               </div>
               <div className="topnave__right-item">
                   {/*dropdown here */}
                   <box-icon name='bell'></box-icon>
                   <Dropdown
                        badge = '12'
                        contentData={notifications}
                        renderItems={(item, index) => renderNotificationItem(item, index)}
                        renderFooter={() => <Link to='/'>View All</Link>}
                   />              
               </div>
               <div className="topnave__right-item">
                   {/*extra */}
                   <Dropdown/>
               </div>
           </div>
       </div>
    )
}

export default TopNav
