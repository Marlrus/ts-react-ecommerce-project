import React from 'react';

import FormInput from '../../components/form-input/form-input.component';
import CustomButton from '../../components/custom-button/custom-button.component';

import {
   signInWithGoogle,
   auth,
} from '../../firebase/firebase.utils';

import './sign-in.styles.scss';
import {
   ButtonContainer,
   SignInContainer,
   SignInTitle,
} from './sign-in.styles';

interface SignInState {
   [key: string]: string;
}

class SignIn extends React.Component<any, SignInState> {
   constructor(props: any) {
      super(props);

      this.state = {
         email: '',
         password: '',
      };
   }

   handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();

      const { email, password } = this.state;

      try {
         await auth.signInWithEmailAndPassword(email, password);
         this.setState({ email: '', password: '' });
      } catch (err) {
         console.error(err);
      }
   };

   handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = event.target;
      this.setState({ [name]: value });
   };

   render() {
      return (
         <SignInContainer>
            <SignInTitle>I already have an Account</SignInTitle>
            <span>Sign in with your email and password</span>

            <form onSubmit={this.handleSubmit}>
               <FormInput
                  name='email'
                  type='email'
                  label='email'
                  value={this.state.email}
                  handleChange={this.handleChange}
                  required
               />
               <FormInput
                  name='password'
                  type='password'
                  label='password'
                  value={this.state.password}
                  handleChange={this.handleChange}
                  required
               />
               <ButtonContainer>
                  <CustomButton type='submit'> Sign in </CustomButton>
                  <CustomButton
                     onClick={signInWithGoogle}
                     type='button'
                     isGoogleSignIn
                  >
                     Sign in with Google
                  </CustomButton>
               </ButtonContainer>
            </form>
         </SignInContainer>
      );
   }
}

export default SignIn;
