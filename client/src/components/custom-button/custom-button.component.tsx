import React from 'react';

import { CustomButtonContainer } from './custom-button-styles';

export interface CustomButtonProps {
   children: React.ReactNode;
   isGoogleSignIn?: boolean;
   inverted?: boolean;
   type?: 'button' | 'submit' | 'reset';
   onClick?: () => Promise<firebase.auth.UserCredential> | void;
}

const CustomButton: React.FC<CustomButtonProps> = ({
   children,
   ...props
}) => (
   <CustomButtonContainer {...props}>
      {children}
   </CustomButtonContainer>
);

export default CustomButton;
