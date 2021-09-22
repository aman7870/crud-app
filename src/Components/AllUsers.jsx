import { getUsers,deleteUser } from "../Services/api";
import { useEffect, useState } from "react";
import { TableCell, TableRow, Table, TableHead, TableBody, Button } from "@material-ui/core";
import { Link } from "react-router-dom";

const AllUsers = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    getAllUsers();
  },[]);

  const getAllUsers = async () => {
    const response = await getUsers();
    console.log(response.data);
    setUsers(response.data);
  };

  const deleteUserData = async (id) => {

    await deleteUser(id);
    getAllUsers();

  }
  return (
      <Table>
          <TableHead>
              <TableRow>
                  <TableCell>ID</TableCell>
                  <TableCell>Name</TableCell>
                  <TableCell>Username</TableCell>
                  <TableCell>Email</TableCell>
                  <TableCell>Phone</TableCell>
                  <TableCell> </TableCell>
              </TableRow>
          </TableHead>
          <TableBody>
              {
                  users.map( user => (
                      <TableRow>
                          <TableCell>{user.id}</TableCell>
                          <TableCell>{user.username}</TableCell>
                          <TableCell>{user.name}</TableCell>
                          <TableCell>{user.email}</TableCell>
                          <TableCell>{user.phone}</TableCell>
                          <TableCell>
                              <Button variant="contained" color = "primary" component = {Link} to={`/edit/${user.id}`}>Edit</Button>
                              <Button variant="contained" color = "secondary" onClick={()=>deleteUserData(user.id)}>Delete</Button>
                          </TableCell>
                      </TableRow>
                  ))
              }
          </TableBody>
      </Table>
  );
};

export default AllUsers;
