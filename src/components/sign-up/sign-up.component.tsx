import React, { Dispatch } from 'react';
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
import { UserActions, SignUpUser } from '../../redux/user/user.types';

interface SignUpState {
   [name: string]: string;
   displayName: string;
   email: string;
   password: string;
   confirmPassword: string;
}

class SignUp extends React.Component<SignUpProps, SignUpState> {
   constructor(props: SignUpProps) {
      super(props);

      this.state = {
         displayName: '',
         email: '',
         password: '',
         confirmPassword: '',
      };
   }

   handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();

      const {
         displayName,
         email,
         password,
         confirmPassword,
      } = this.state;

      if (password !== confirmPassword) {
         return alert(`Passwords don't match`);
      }

      try {
         // const { user } = await auth.createUserWithEmailAndPassword(
         //    email,
         //    password
         // );

         // await createUserProfileDocument(user, { displayName });
         const { signUpStart } = this.props;

         signUpStart({ email, password, displayName });

         this.setState({
            displayName: '',
            email: '',
            password: '',
            confirmPassword: '',
         });
      } catch (err) {
         console.error(err);
      }
   };

   handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = event.target;

      this.setState({ [name]: value });
   };

   render() {
      const {
         displayName,
         email,
         password,
         confirmPassword,
      } = this.state;
      return (
         <SignUpContainer>
            <SignUpTitle>I do not have an account</SignUpTitle>
            <span>Sign up with your email and password</span>
            <form
               className='sign-up-form'
               onSubmit={this.handleSubmit}
            >
               <FormInput
                  type='text'
                  name='displayName'
                  value={displayName}
                  handleChange={this.handleChange}
                  label='Display Name'
                  required
               />
               <FormInput
                  type='email'
                  name='email'
                  value={email}
                  handleChange={this.handleChange}
                  label='Email'
                  required
               />
               <FormInput
                  type='password'
                  name='password'
                  value={password}
                  handleChange={this.handleChange}
                  label='password'
                  required
               />
               <FormInput
                  type='password'
                  name='confirmPassword'
                  value={confirmPassword}
                  handleChange={this.handleChange}
                  label='Confirm Password'
                  required
               />
               <CustomButton type='submit'>SIGN UP</CustomButton>
            </form>
         </SignUpContainer>
      );
   }
}

const mapDispatchToProps = (dispatch: Dispatch<UserActions>) => ({
   signUpStart: (signUpUser: SignUpUser) =>
      dispatch(signUpStart(signUpUser)),
});

const connector = connect(null, mapDispatchToProps);

type SignUpProps = ConnectedProps<typeof connector>;

export default connector(SignUp);
