import React from 'react';

import './custom-button.styles.scss';

interface CustomButtonProps {
   children: React.ReactNode;
   isGoogleSignIn?: boolean;
   type?: 'button' | 'submit' | 'reset';
   onClick?: () => Promise<firebase.auth.UserCredential>;
}

const CustomButton: React.FC<CustomButtonProps> = ({
   children,
   isGoogleSignIn,
   ...otherProps
}) => (
   <button
      className={`custom-button ${
         isGoogleSignIn ? 'google-sign-in' : ''
      }`}
      {...otherProps}
   >
      {children}
   </button>
);

export default CustomButton;
