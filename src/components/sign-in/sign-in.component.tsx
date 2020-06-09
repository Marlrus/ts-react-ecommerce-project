import React, { Dispatch } from 'react';
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

interface SignInState {
   [key: string]: string;
}

class SignIn extends React.Component<SignInProps, SignInState> {
   constructor(props: SignInProps) {
      super(props);

      this.state = {
         email: '',
         password: '',
      };
   }

   handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      const { emailSignInStart } = this.props;
      const { email, password } = this.state;

      emailSignInStart(email, password);
   };

   handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = event.target;
      this.setState({ [name]: value });
   };

   render() {
      const { googleSignInStart } = this.props;
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
   }
}

const mapDispatchToProps = (dispatch: Dispatch<UserActions>) => ({
   googleSignInStart: () => dispatch(googleSignInStart()),
   emailSignInStart: (email: string, password: string) =>
      dispatch(emailSignInStart({ email, password })),
});

const connector = connect(null, mapDispatchToProps);

type SignInProps = ConnectedProps<typeof connector>;

export default connector(SignIn);
