import React from 'react';
import { toast } from 'react-toastify';

const UserRow = ({user,index,refetch}) => {
const {email} = user
  const makeAdmin=()=>{
    const url = `http://localhost:5000/user/admin/${email}`;
    fetch(url,{
      method:'PUT',
      headers:{
        authorization: `Bearer ${localStorage.getItem('accessToken')}`
      }
    })
    .then(res =>{
      if(res.status === 403){
        toast.error(`Failed to make an Admin`)
      }
      return res.json()})
    .then(data => {
      if(data.modifiedCount > 0){
        refetch();
        toast.success(`successfully make an Admin`);
      }
    })
  }
  return (
    <>
      <tr>
        <th>{index + 1}</th>
        <td>{email}</td>
        <td>
          {user.role === "admin" ? (
            <p className="text-secondary">
              Admin
            </p>
          ) : (
            <button onClick={makeAdmin} className="btn btn-xs">
              Make Admin
            </button>
          )}
        </td>
        <td>
          <button className="btn btn-xs">Remove</button>
        </td>
      </tr>
    </>
  );
};

export default UserRow;