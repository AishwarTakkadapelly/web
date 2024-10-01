import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const apiUrl = process.env.MOVE_CLOUD_LOCAL_HOST_BACK_END;

const SignIn = () => {
  const navigate = useNavigate();  // useNavigate hook to redirect after successful sign in
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    organizationName: '',
    rememberMe: false,
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const validateForm = () => {
    // Add validation logic if needed
    return formData.username !== '' && formData.password !== '';
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const isValid = validateForm();
    if (isValid) {
      setLoading(true);  // Start loading
      setError(null);    // Reset any previous errors

      // Create the SignIn object
      const signInObject = {
        email: formData.username,
        password: formData.password,
        companyName: 'google.com'  // Optional organizationName
      };

      try {
        console.log(signInObject);
        const response = await axios.post(apiUrl+'/login', signInObject);  // Corrected endpoint
        console.log('Sign-in successful:', response.data);

        // Navigate to the home page or another page after successful sign-in
        window.location.href = 'http://192.168.1.30:3001/';
      } catch (error) {
        // Handle error and set error message
        console.error('Error during sign-in:', error.response || error.message);
        setError(error.response?.data?.message || 'Failed to sign in. Please try again.');
      } finally {
        setLoading(false);  // Stop loading
      }
    } else {
      setError('Please fill in both username and password.');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-theme1-primary text-center">Sign In to MoveCloud</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-theme1-primary mb-2" htmlFor="username">
              Username
            </label>
            <input
              type="text"
              id="username"
              name="username"
              value={formData.username}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-theme1-primary"
              placeholder="Enter your username"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-theme1-primary mb-2" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-theme1-primary"
              placeholder="Enter your password"
              required
            />
          </div>
          <div className="mb-4 flex items-center">
            <input
              type="checkbox"
              id="remember"
              name="rememberMe"
              checked={formData.rememberMe}
              onChange={handleChange}
              className="mr-2"
            />
            <label htmlFor="remember" className="text-theme1-primary">
              Remember Me
            </label>
          </div>
          <button
            type="submit"
            className="w-full bg-theme1-primary text-white py-2 px-4 rounded-lg hover:bg-theme1-primary-dark focus:outline-none focus:ring focus:border-theme1-primary"
            disabled={loading}
          >
            {loading ? 'Signing In...' : 'Sign In'}
          </button>
        </form>
        {error && <div className="mt-4 text-red-500 text-center">{error}</div>}
        <p className="mt-4 text-center text-theme1-secondary">
          Don't have an account?{' '}
          <Link to="/signup" className="text-theme1-primary hover:underline">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignIn;
