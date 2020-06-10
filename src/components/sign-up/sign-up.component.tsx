import React, { Dispatch, useState } from 'react';
import { connect, ConnectedProps } from 'react-redux';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

// import {
//    auth,
//    createUserProfileDocument,
// } from '../../firebase/firebase.utils';
import { signUpStart } from '../../redux/user/user.actions';

import { SignUpContainer, SignUpTitle } from './sign-up.styles';
//Types
import {
   UserActions,
   UserCredentials,
} from '../../redux/user/user.types';

interface SignUpState {
   [name: string]: string;
   displayName: string;
   email: string;
   password: string;
   confirmPassword: string;
}

const SignUp: React.FC<SignUpProps> = ({ signUpStart }) => {
   const [userCredentials, setCredentials] = useState<SignUpState>({
      displayName: '',
      email: '',
      password: '',
      confirmPassword: '',
   });

   const {
      displayName,
      email,
      password,
      confirmPassword,
   } = userCredentials;

   const handleSubmit = async (
      event: React.FormEvent<HTMLFormElement>
   ) => {
      event.preventDefault();

      if (password !== confirmPassword) {
         return alert(`Passwords don't match`);
      }

      signUpStart({ email, password, displayName });
   };

   const handleChange = (
      event: React.ChangeEvent<HTMLInputElement>
   ) => {
      const { name, value } = event.target;

      setCredentials({ ...userCredentials, [name]: value });
   };

   return (
      <SignUpContainer>
         <SignUpTitle>I do not have an account</SignUpTitle>
         <span>Sign up with your email and password</span>
         <form className='sign-up-form' onSubmit={handleSubmit}>
            <FormInput
               type='text'
               name='displayName'
               value={displayName}
               handleChange={handleChange}
               label='Display Name'
               required
            />
            <FormInput
               type='email'
               name='email'
               value={email}
               handleChange={handleChange}
               label='Email'
               required
            />
            <FormInput
               type='password'
               name='password'
               value={password}
               handleChange={handleChange}
               label='password'
               required
            />
            <FormInput
               type='password'
               name='confirmPassword'
               value={confirmPassword}
               handleChange={handleChange}
               label='Confirm Password'
               required
            />
            <CustomButton type='submit'>SIGN UP</CustomButton>
         </form>
      </SignUpContainer>
   );
};

const mapDispatchToProps = (dispatch: Dispatch<UserActions>) => ({
   signUpStart: (userCredentials: UserCredentials) =>
      dispatch(signUpStart(userCredentials)),
});

const connector = connect(null, mapDispatchToProps);

type SignUpProps = ConnectedProps<typeof connector>;

export default connector(SignUp);
