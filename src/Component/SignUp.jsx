import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
import TextInput from '../CommonComponent/TextInput';
import axios from 'axios';

const apiUrl = process.env.MOVE_CLOUD_LOCAL_HOST_BACK_END;
console.log(apiUrl);

const SignUp = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    organization: '',
    contact: '',
    password: '',
    confirmPassword: '',
    consent: false,
  });

  const [errors, setErrors] = useState({});
  const [verificationMessage, setVerificationMessage] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const newValue = type === 'checkbox' ? checked : value;
    setFormData({
      ...formData,
      [name]: newValue,
    });
  };

  const validateForm = async () => {
    const newErrors = {};

    if (formData.password !== formData.confirmPassword) {
      newErrors.password = "Passwords do not match";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const isValid = await validateForm();
    if (isValid) {
      const signUpObject = {
        firstName: formData.firstName,
        lastName: formData.lastName,
        businessEmail: formData.email,
        encryptedPassword: formData.password,
        companyName: formData.organization,
        mobileNumber: formData.contact,
        role: {
          roleId: 1,
        },
        awsAccessKey: 'accessKey123',
        awsSecretAccessKey: 'secretAccessKey123',
      };

      try {
        console.log(signUpObject);
        const response = await axios.post(apiUrl + '/register', signUpObject);
        console.log('Sign-up successful:', response.data);

        // Show email verification message
        setVerificationMessage(true);

        // Optionally, navigate after some delay
        setTimeout(() => {
          navigate('/');
        }, 5000); // 5 seconds delay before redirect
      } catch (error) {
        console.error('Error during sign-up:', error.response || error.message);
      }
    }
  };

  const handleGoogleSuccess = (response) => {
    console.log('Google Login Success:', response);
  };

  const handleGoogleFailure = (error) => {
    console.error('Google Login Failure:', error);
  };

  return (
    <GoogleOAuthProvider clientId="YOUR_GOOGLE_CLIENT_ID">
      <div className="flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-lg">
          <h2 className="text-2xl font-bold mb-6 text-theme1-primary text-center">
            Sign Up for MoveCloud
          </h2>
          {!verificationMessage ? (
            <form onSubmit={handleSubmit}>
              <div className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <TextInput
                    id="firstName"
                    name="firstName"
                    label="First Name"
                    value={formData.firstName}
                    onChange={handleChange}
                    placeholder="Enter your first name"
                    required
                    className="w-full"
                  />
                  <TextInput
                    id="lastName"
                    name="lastName"
                    label="Last Name"
                    value={formData.lastName}
                    onChange={handleChange}
                    placeholder="Enter your last name"
                    required
                    className="w-full"
                  />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <TextInput
                    id="email"
                    name="email"
                    type="email"
                    label="Email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email"
                    required
                    className="w-full"
                  />
                  <TextInput
                    id="organization"
                    name="organization"
                    label="Company Name"
                    value={formData.organization}
                    onChange={handleChange}
                    placeholder="Enter your organization name"
                    required
                    className="w-full"
                  />
                </div>
                {errors.email && (
                  <p className="text-red-500 text-sm mt-2">{errors.email}</p>
                )}
                <TextInput
                  id="contact"
                  name="contact"
                  label="Contact"
                  value={formData.contact}
                  onChange={handleChange}
                  placeholder="Enter your contact number"
                  required
                  className="w-full"
                />
                <TextInput
                  id="password"
                  name="password"
                  type="password"
                  label="Password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Enter your password"
                  pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                  title="Must contain at least one number, one uppercase and lowercase letter, and at least 8 or more characters"
                  required
                  className="w-full"
                />
                <TextInput
                  id="confirmPassword"
                  name="confirmPassword"
                  type="password"
                  label="Confirm Password"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  placeholder="Confirm your password"
                  required
                  className="w-full"
                />
                {errors.password && (
                  <p className="text-red-500 text-sm mt-2">{errors.password}</p>
                )}

                <div className="mb-4">
                  <label
                    className="inline-flex items-center text-theme1-primary mb-2"
                    htmlFor="consent"
                  >
                    <input
                      type="checkbox"
                      id="consent"
                      name="consent"
                      checked={formData.consent}
                      onChange={handleChange}
                      className="mr-2 leading-tight"
                      required
                    />
                    <span className="text-theme1-secondary">
                      I agree to the{' '}
                      <Link to="/consent" className="hover:text-theme1-primary">
                        consent terms
                      </Link>
                      .
                    </span>
                  </label>
                </div>

                <button
                  type="submit"
                  className="w-full bg-theme1-primary text-white py-2 px-4 rounded-lg hover:bg-theme1-primary focus:outline-none focus:ring focus:border-theme1-primary"
                >
                  Sign Up
                </button>
              </div>
            </form>
          ) : (
            <div className="text-center">
              <h3 className="text-xl font-semibold text-green-500">
                Sign-up successful! Please check your email for verification.
              </h3>
              <p className="text-theme1-secondary">
                You will be redirected to the home page shortly...
              </p>
            </div>
          )}
          <div className="flex flex-col items-center mt-6">
            <GoogleLogin
              onSuccess={handleGoogleSuccess}
              onFailure={handleGoogleFailure}
              buttonText="Sign up with Google"
              className="w-full mb-4"
            />
          </div>
          <p className="mt-4 text-center text-theme1-secondary">
            Already have an account?{' '}
            <Link to="/" className="text- hover:text-primary">
              Sign In
            </Link>
          </p>
        </div>
      </div>
    </GoogleOAuthProvider>
  );
};

export default SignUp;
