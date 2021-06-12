import React, { useEffect, useState } from 'react';

import { UserDetail } from './UserDetail'
import './UsersList.css'
import Footer from '../footer/Footer';

const UsersList = () => {

  const [users, setUsers] = useState([])
  const [support, setSupport] = useState()

  useEffect(() => {
    fetchUsersAsync()
  }, [])

  const fetchUsersAsync = async () => {
    try {
      const res = await fetch("https://reqres.in/api/users/");
      const myResponse = await res.json();
      setUsers(myResponse.data);
      setSupport(myResponse.support);
    } catch (e) {
      console.log(e)
    }
  };

  return (
    <>
      <h1>Users List</h1>
      <div className='usersList'>
        {users && users.map((user) => <UserDetail {...user} />)}
      </div>
      {support && <Footer support={support} />}
    </>
  );
}

export default UsersList;
