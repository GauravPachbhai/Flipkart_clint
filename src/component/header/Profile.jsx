import { Box, Typography,Menu,MenuItem,styled } from "@mui/material";
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';
import { useState } from "react";



const Component = styled(Menu)`
    margin-top:5px;
`;

const LogOut = styled(Typography)`
    font-size: 14px;
    margin-left: 20px;
`

const Profile = ({ account, setAccount }) => {

    const [open, setOpen] = useState(null);

    const handleClick =(event)=>{
        console.log("Clicked");
        setOpen(event.currentTarget);
        
    };
    
    const handleClose =()=>{
        setOpen(null);
    };

    const logoutUser =()=>{
        setAccount('')
    };
    return (
        <>

            <Box onClick={handleClick} ><Typography style={{marginTop:2, cursor:'pointer'}}>{account}</Typography></Box>
            <Component 
                
                anchorEl={open}
                open={Boolean(open)}
                onClose={handleClose}
            >
                <MenuItem onClick={()=> {handleClose(); logoutUser();}}>
                    <PowerSettingsNewIcon color="error" fontSize="small"/>
                    <LogOut>Logout</LogOut>
                </MenuItem>
                
            </Component >
        </>
    )
};

export default Profile;