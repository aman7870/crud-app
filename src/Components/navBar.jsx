import {AppBar,Toolbar,makeStyles} from '@material-ui/core';
import { NavLink } from 'react-router-dom';

const userStyle = makeStyles({
    header: {
        background: '#111111'
    },
    tabs: {
        color: '#FFFFFF',
        textDecoration: 'none',
        marginRight: 20,
        fontSize: 20
    }

})

const NavBar = () => {
    const classes = userStyle();  
  return (
    <AppBar position="static" className={classes.header}>
      <Toolbar>
        <NavLink className={classes.tabs} to="./" exact> Code for interview</NavLink>
        <NavLink  className={classes.tabs} to="all" exact> All Users</NavLink>
        <NavLink  className={classes.tabs} to="add" exact> Add Users</NavLink>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
