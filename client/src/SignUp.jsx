import React, { useState } from 'react';
import SignupSuccessPopup from './SignUpPopUp';
import { NavLink} from 'react-router-dom';

const AuthService = {
  register: (email, password) => {
    return new Promise((resolve, reject) => {
      if (email && password) {
        resolve();
      } else {
        reject({ response: { data: { message: 'Registration failed.' } } });
      }
    });
  },
};

function SignUp(props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [registrationError, setRegistrationError] = useState('');
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSignUp = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    AuthService.register(email, password)
      .then(() => {
        setShowSuccessPopup(true);
      })
      .catch((error) => {
        setRegistrationError(error.response.data.message);
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  const closePopup = () => {
    setShowSuccessPopup(false);
  };

  return (
    <div>
      <h2>Sign Up</h2>
      {showSuccessPopup ? (
        <SignupSuccessPopup onClose={closePopup} />
      ) : (
        <form onSubmit={handleSignUp}>
          <div>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" disabled={isSubmitting}>
            {isSubmitting ? 'Signing Up...' : 'Sign Up'}
          </button>
        </form>
      )}
      {registrationError && <p>{registrationError}</p>}
      <NavLink to="/">Go back to Home</NavLink>
    </div>
  );
}

export default SignUp;