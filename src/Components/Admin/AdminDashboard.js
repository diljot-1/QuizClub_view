import React, { useState } from 'react'
import RoleAdder from './RoleAdder'
import { ProSidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';

export default function AdminDashboard(props) {
    const [loadRoleAdder, setLoadRoleAdder]=useState(false);
    
    function handleRoleAdder(){
        setLoadRoleAdder(true);
    }
    return (
        <>
                <div style={{width: '50px', height: '50px', position: 'relative'}}></div>

                <ProSidebar styles={{marginTop:'500px', position:'absolute'}}>
                <Menu styles={{marginTop:'500px',position:'absolute'}} iconShape="square">
                    <MenuItem onClick={handleRoleAdder} active='true' >Add Role</MenuItem>
                    <SubMenu title="Components" >
                    <MenuItem>Component 1</MenuItem>
                    <MenuItem>Component 2</MenuItem>
                    </SubMenu>
                </Menu>
                </ProSidebar>;
                {loadRoleAdder && <RoleAdder/>}
            
        </>
    )
}
