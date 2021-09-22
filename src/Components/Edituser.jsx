import { FormControl,FormGroup,InputLabel,Input,Button,makeStyles,Typography } from "@material-ui/core";
import { useState, useEffect } from "react";
import { getUsers1, editUser } from "../Services/api"; 
import { useHistory, useParams } from "react-router-dom";


const useStyles = makeStyles({
    container: {
        width: '50%',
        margin: '5%'
    }
})


const intialValues = {
    name: '',
    username: '',
    email: '',
    phone: ''
}



const EditUser = () => {
    const [user, setUser] = useState(intialValues);
    const {name, username, email, phone} = user;
    const { id } = useParams();
    const classes = useStyles();
    const history = useHistory();

    const loadUserData = async() => {
        const response = await getUsers1(id);
        setUser(response.data);
    }

    useEffect(() => {
       loadUserData();
    }, []);

    const onValueChange = (e) => {
        console.log(e.target.value)
        setUser({ ...user, [e.target.name]: e.target.value})
        
    }

    const editUserDetails = async () => {
        await editUser(id, user);
        history.push(`../all`);
    }
    return(
        <FormGroup className={classes.container}>
                <FormControl>
                    <Typography>Edit User</Typography>
                    <InputLabel>Name</InputLabel>
                    <Input onChange={(e) => onValueChange(e)} name='name' value={name} />
                </FormControl>
                <FormControl>
                    <InputLabel>Username</InputLabel>
                    <Input onChange={(e) => onValueChange(e)} name='username' value={username}/>
                </FormControl>
                <FormControl>
                    <InputLabel>Email</InputLabel>
                    <Input onChange={(e) => onValueChange(e)} name='email' value={email}/>
                </FormControl>
                <FormControl>
                    <InputLabel>Phone</InputLabel>
                    <Input onChange={(e) => onValueChange(e)} name='phone' value={phone} />
                </FormControl>
                <Button variant="contained" color="primary" onClick={() => editUserDetails()}>Edit User</Button>
        </FormGroup>
    );  
};


export default EditUser;