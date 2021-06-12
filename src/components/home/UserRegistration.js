import React, { useState } from 'react';

const UserRegistration = ({ onUserRegSubmit, regLabel }) => {

  const [register, setRegister] = useState({
    firstName: '',
    lastName: '',
    email: ''
  })

  const onFormChange = (e) => {
    setRegister({ ...register, [e.target.name]: e.target.value })
  }

  const onRegSubmit = (e) => {
    e.preventDefault();
    onUserRegSubmit(register);
  }

  return (
    <>
      <h1>{regLabel}</h1>
      <form onSubmit={onRegSubmit}>
        <input placeholder='First Name' name='firstName' value={register.firstName} onChange={onFormChange} />
        <input placeholder="Last Name" name='lastName' value={register.lastName} onChange={onFormChange} />
        <input placeholder="Email" name='email' value={register.email} onChange={onFormChange} />
        <button type='submit'>Submit</button>
      </form>
    </>
  );
}

export default UserRegistration;
