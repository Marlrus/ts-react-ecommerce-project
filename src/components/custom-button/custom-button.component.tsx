import React from 'react';

import './custom-button.styles.scss';

interface CustomButtonProps {
   children: React.ReactNode;
   isGoogleSignIn?: boolean;
   inverted?: boolean;
   type?: 'button' | 'submit' | 'reset';
   onClick?: () => Promise<firebase.auth.UserCredential> | void;
}

const CustomButton: React.FC<CustomButtonProps> = ({
   children,
   isGoogleSignIn,
   inverted,
   ...otherProps
}) => (
   <button
      className={`custom-button ${inverted ? 'inverted' : null} ${
         isGoogleSignIn ? 'google-sign-in' : ''
      }`}
      {...otherProps}
   >
      {children}
   </button>
);

export default CustomButton;
