import { Box, makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
    components : {
        margin:50
    }
})


const Crud = () => {
   const classes = useStyles();
    return(
        <Box>
        <Box className={classes.components}>
            <h1 style={{marginBottom:50}}>Crud Operations</h1>
        </Box>
        </Box>
    );
    

};

export default Crud;