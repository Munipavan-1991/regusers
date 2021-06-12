import React from 'react'

const DisplayUserInfo = ({ firstName, lastName, email }) => {
  return (
    <div>
      <h5>User Information</h5>
      <p>First Name: {firstName} </p>
      <p>Last Name: {lastName}</p>
      <p>Email: {email}</p>
    </div>
  )
}

export default DisplayUserInfo;
