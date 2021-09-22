import notFound  from '../Assets/Images/404_not_found.png';
const NotFound = () => {
    return(
        <img src={notFound} style={{width:'30%', margin: '80px 0 0 10px'}}/>
    );
};

export default NotFound;