import { FormControl,FormGroup,InputLabel,Input,Button,makeStyles,Typography } from "@material-ui/core";
import { useState } from "react";
import { addUser } from "../Services/api"; 
import { useHistory } from "react-router-dom";

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



const AddUser = () => {
    const [user, setUser] = useState(intialValues);
    const {name, username, email, phone} = user;
    const classes = useStyles();
    const history = useHistory();

    const onValueChange = (e) => {
        console.log(e.target.value)
        setUser({ ...user, [e.target.name]: e.target.value})
        
    }

    const addUserDetails = async () => {
        await addUser(user);
        history.push('./all');
    }
    return(
        <FormGroup className={classes.container}>
                <FormControl>
                <Typography>Add User</Typography>
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
                <Button variant="contained" color="primary" onClick={() => addUserDetails()}>Add User</Button>
        </FormGroup>
    );  
};


export default AddUser;