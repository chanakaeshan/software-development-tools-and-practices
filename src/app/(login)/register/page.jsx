import React from 'react'

export default function Register() {
  return (
    <div className='signup-box'>
      <h1>Register</h1>
      <form className='signup-box'>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" placeholder='Enter Your Name' required />
        <br />
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" placeholder='Enter Your Email' required />
        <br />
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password" placeholder='Enter Your Password' required />
        <br />
        <button type="submit">Register</button>
      </form>
    </div>
  );
}