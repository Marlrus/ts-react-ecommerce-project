import React, { Dispatch, useState } from 'react';
import { connect, ConnectedProps } from 'react-redux';

import FormInput from '../../components/form-input/form-input.component';
import CustomButton from '../../components/custom-button/custom-button.component';

import {
   googleSignInStart,
   emailSignInStart,
} from '../../redux/user/user.actions';

import {
   ButtonContainer,
   SignInContainer,
   SignInTitle,
} from './sign-in.styles';
import { UserActions } from '../../redux/user/user.types';

interface Credentials {
   [key: string]: string;
}

const SignIn: React.FC<SignInProps> = ({
   googleSignInStart,
   emailSignInStart,
}) => {
   const [userCredentials, setCredentials] = useState<Credentials>({
      email: '',
      password: '',
   });

   const { email, password } = userCredentials;

   const handleSubmit = async (
      event: React.FormEvent<HTMLFormElement>
   ) => {
      event.preventDefault();

      emailSignInStart(email, password);
   };

   const handleChange = (
      event: React.ChangeEvent<HTMLInputElement>
   ) => {
      const { name, value } = event.target;
      setCredentials({ ...userCredentials, [name]: value });
   };

   return (
      <SignInContainer>
         <SignInTitle>I already have an Account</SignInTitle>
         <span>Sign in with your email and password</span>

         <form onSubmit={handleSubmit}>
            <FormInput
               name='email'
               type='email'
               label='email'
               value={email}
               handleChange={handleChange}
               required
            />
            <FormInput
               name='password'
               type='password'
               label='password'
               value={password}
               handleChange={handleChange}
               required
            />
            <ButtonContainer>
               <CustomButton type='submit'> Sign in </CustomButton>
               <CustomButton
                  onClick={googleSignInStart}
                  type='button'
                  isGoogleSignIn
               >
                  Sign in with Google
               </CustomButton>
            </ButtonContainer>
         </form>
      </SignInContainer>
   );
};

const mapDispatchToProps = (dispatch: Dispatch<UserActions>) => ({
   googleSignInStart: () => dispatch(googleSignInStart()),
   emailSignInStart: (email: string, password: string) =>
      dispatch(emailSignInStart({ email, password })),
});

const connector = connect(null, mapDispatchToProps);

type SignInProps = ConnectedProps<typeof connector>;

export default connector(SignIn);
