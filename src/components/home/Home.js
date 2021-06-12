import React, { useState } from 'react';

import DisplayUserInfo from './DisplayUserInfo';
import UserRegistration from './UserRegistration';

const Home = () => {
  const [userInfo, setUserInfo] = useState()

  const handleUserRegSubmit = (userRegInfo) => {
    setUserInfo(userRegInfo)
  }

  return (
    <div>
      <UserRegistration regLabel='User Registration' onUserRegSubmit={handleUserRegSubmit} />
      <DisplayUserInfo {...userInfo} />
    </div>
  )
}

export default Home
