import { Box, Button, Dialog, TextField, styled, Typography } from "@mui/material";

import { authenticateSignup, authenticatelogin } from '../../service/api';
import { useState, useContext } from "react";

import { DataContext } from "../../context/DataProvider";

const Wrapper = styled(Box)`
    padding: 25px 35px;
    display: flex;
    flex: 1;
    overflow: auto;
    flex-direction: column;
    & > div, & > button, & > p {
        margin-top: 20px;
    }
`;
const LoginButton = styled(Button)`
    text-transform: none;
    background: #FB641B;
    color: #fff;
    height: 48px;
    border-radius: 2px;
`;

const RequestOTP = styled(Button)`
    text-transform: none;
    background: #fff;
    color: #2874f0;
    height: 48px;
    border-radius: 2px;
    box-shadow: 0 2px 4px 0 rgb(0 0 0 / 20%);
`;
const Text = styled(Typography)`
    color: #878787;
    font-size: 12px;
`;
const CreateAccount = styled(Typography)`
    margin: auto 0 5px 0;
    text-align: center;
    color: #2874f0;
    font-weight: 600;
    font-size: 14px;
    cursor: pointer
`;
const Error =styled(Typography)`
    font-size:12px;
    color: #ff6161;
    line-height:0;
    margin-top:10px;
    font-weight:600;
`


const signupInitialValues = {
    firstname: '',
    lastname: '',
    username: '',
    email: '',
    password: '',
    phone: ''
};

const accountInitialValues = {
    login: {
        view: 'login',
        heading: 'Login',
        subHeading: 'Get access to your Orders, Wishlist and Recommendations'
    },
    signup: {
        view: 'signup',
        heading: "Looks like you're new here",
        subHeading: 'Signup to get started'
    }
};

const loginInitialValue={
    username:'',
    password:''
}

const LoginDialog = ({ open, setOpen }) => {
    const [account, toggleAccount] = useState(accountInitialValues.login);
    const [signup, setSignup] = useState(signupInitialValues);
    const [login, setLogin] = useState(loginInitialValue);
    const [error, setError] =useState(false);

    const { setAccount } = useContext(DataContext);

    const onInputChange = (e) => {
        setSignup({ ...signup, [e.target.name]: e.target.value });
    };

    const signupUser = async (e) => {
        let response = await authenticateSignup(signup);
        if (!response) return;
        setAccount(signup.firstname);
        handleClose();


    }


    const toggleSignup = () => {
        toggleAccount(accountInitialValues.signup);
    }


    const handleClose = () => {
        setOpen(false);
        toggleAccount(accountInitialValues.login);
        setError(false);
    };

    const onValueChange =(e)=>{
        setLogin({...login, [e.target.name]: e.target.value})
    };
    const loginUser = async ()=>{
       let response = await authenticatelogin(login);
       console.log(response);
       if(response.status === 200){
        handleClose();
        setAccount(response.data.data.firstname)
       }else{
            setError(true)
       }
    };


    return (
        <Dialog open={open} onClose={handleClose} PaperProps={{ sx: { maxWidth: 'unset' } }}>
            <Box sx={{ height: '70vh', width: '90vh' }}>
                <Box sx={{ display: 'flex', height: '100%' }}>
                    <Box
                        sx={{
                            background: '#2874f0 url(https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/login_img_c4a81e.png) center 85% no-repeat',
                            height: '100%',
                            width: '40%',
                            display: 'flex',
                            flexDirection: 'column',
                            padding: '45px 35px',
                        }}
                    >
                        <Typography variant="h5" style={{ color: '#FFFFFF', fontWeight: 600 }}>{account.heading}</Typography>
                        <Typography style={{ marginTop: 20, color: '#FFFFFF', fontWeight: 500 }}>
                            {account.subHeading}
                        </Typography>
                    </Box>
                    {
                        account.view === 'login' ?
                            <Wrapper sx={{ padding: '0 2rem' }}>
                                <TextField variant="standard"  onChange={(e) => onValueChange(e)} name='username' label="Enter Username" />
                                <TextField variant="standard" onChange={(e) => onValueChange(e)} name='password'  label="Enter password" />
                                {error && <Error>Please valid username or password</Error>}
                                <Text>
                                    By continuing, you agree to all Flipkart's Terms of Use and Privacy Policy.
                                </Text>
                                <LoginButton onClick={()=> loginUser()}>Login</LoginButton>
                                <Typography style={{ textAlign: 'center' }}>OR</Typography>
                                <RequestOTP>Request OTP</RequestOTP>
                                <CreateAccount onClick={() => toggleSignup()} >New to Flipkart? Create account</CreateAccount >
                            </Wrapper>
                            :
                            <Wrapper>
                                <TextField variant="standard" onChange={(e) => onInputChange(e)} name='firstname' label='Enter Firstname' />
                                <TextField variant="standard" onChange={(e) => onInputChange(e)} name='lastname' label='Enter Lastname' />
                                <TextField variant="standard" onChange={(e) => onInputChange(e)} name='username' label='Enter Username' />
                                <TextField variant="standard" onChange={(e) => onInputChange(e)} name='email' label='Enter Email' />
                                <TextField variant="standard" onChange={(e) => onInputChange(e)} name='password' label='Enter Password' />
                                <TextField variant="standard" onChange={(e) => onInputChange(e)} name='phone' label='Enter Phone' />
                                <LoginButton onClick={() => signupUser()} >Continue</LoginButton>
                            </Wrapper>
                    }
                </Box>
            </Box>
        </Dialog>
    );
};
export default LoginDialog;

