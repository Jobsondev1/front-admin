import React, { useState }from 'react'
import Logo from '../../imgs/logo.png'
import { UilSignOutAlt } from "@iconscout/react-unicons";
import { SidebarData } from "../../Data/Data";
import './sidebar.css'

const Sidebar = () => {

 const [selected, setSelected] = useState(0)

  return (
    <div className='Sidebar'>
        <div className="logo">
            <img src={Logo} alt="" />
        <span>
            JP<span>A</span>ML
        </span>   
        </div>  
        
        {/*menu*/}
        <div className="menu">
            {SidebarData.map((item, index) =>{
            return(
                <div className={selected === index ? "menuItem active" : "menuItem"}
                key={index}
                onClick={()=>setSelected(index)}
                >
                <item.icon/>
                    <span>
                        {item.heading}
                    </span> 
                </div> 
                 )        
            })}   

            <div className="menuItem">
                 <UilSignOutAlt/>   
            </div>            
        </div>  
    </div>
  )
}

export default Sidebar