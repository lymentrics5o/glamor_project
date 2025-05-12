import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/login', { username, password });
      const { token } = response.data;

      // Store token in localStorage and user role
      localStorage.setItem('token', token);
      
      // You can extract role from token if needed or store directly
      const decodedToken = JSON.parse(atob(token.split('.')[1])); // Decode the JWT
      localStorage.setItem('userRole', decodedToken.role); // Save the role (admin/user)

      navigate('/home'); // Redirect to homepage or dashboard
    } catch (err) {
      setError('Invalid credentials!');
    }
  };

  return (
    <div>
      <form onSubmit={handleLogin}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Login</button>
        {error && <p>{error}</p>}
      </form>
    </div>
  );
};

export default Login;
