import React, { useState } from 'react';
import axios from 'axios';

const Register = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('student'); // Default role

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/api/auth/register', { username, password, role });
      alert('Registration successful! You can now log in.');
      // Optionally redirect to login page
    } catch (error) {
      console.error(error);
      alert('Registration failed. Please try again.');
    }
  };

  return (
    <form onSubmit={handleRegister} className="p-4">
      <h2 className="text-lg font-bold">Register</h2>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="border p-2 mb-2 w-full"
        required
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="border p-2 mb-2 w-full"
        required
      />
      <select
        value={role}
        onChange={(e) => setRole(e.target.value)}
        className="border p-2 mb-2 w-full"
      >
        <option value="student">Student</option>
        <option value="cafeOwner">Cafe Owner</option>
      </select>
      <button type="submit" className="bg-blue-500 text-white p-2 w-full">
        Register
      </button>
    </form>
  );
};

export default Register;