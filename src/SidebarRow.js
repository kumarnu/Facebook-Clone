import { Avatar } from '@material-ui/core'
import React from 'react'
import './SidebarRow.css'
function SidebarRow({src, Icon,title}) { // src Avatar
    return (
        <div className='sidebarRow'>
{/* If there is a src then render the Avatar with source as src */}
            {src && <Avatar src={src} />} 
    {/* If you pass the icon then only render the Icon (must be capital I)          */}
            {Icon && <Icon />}
            <h4>{title}</h4>
        </div>
    )
}

export default SidebarRow
