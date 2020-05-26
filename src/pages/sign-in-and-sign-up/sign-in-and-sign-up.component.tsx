import React from 'react';

import SignIn from '../../components/sign-in/sign-in.component';
import SignUp from '../../components/sign-up/sign-up.component';

import './sign-in-and-sign-up.styles.scss';
import { SignInAndSignUpContainer } from './sign-in-and-sign-up.style';

const SignInAndSignUpPage: React.FC = () => (
   <SignInAndSignUpContainer>
      <SignIn />
      <SignUp />
   </SignInAndSignUpContainer>
);

export default SignInAndSignUpPage;
