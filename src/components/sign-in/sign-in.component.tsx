import React from 'react';

import FormInput from '../../components/form-input/form-input.component';
import CustomButton from '../../components/custom-button/custom-button.component';

import { signInWithGoogle } from '../../firebase/firebase.utils';

import './sign-in.styles.scss';

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

   handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();

      this.setState({ email: '', password: '' });
   };

   handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = event.target;
      this.setState({ [name]: value });
   };

   render() {
      return (
         <div className='sign-in'>
            <h2>I already have an Account</h2>
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
               <CustomButton type='submit'> Sign in </CustomButton>
               <CustomButton onClick={signInWithGoogle}>
                  Sign in with Google
               </CustomButton>
            </form>
         </div>
      );
   }
}

export default SignIn;
