import {
    SignInContainer,
    SignInTitle,
    ButtonsBarContainer
  } from './sign-in.styles';
import React from 'react';
import FormInput from '../../components/form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import {signInWithGoogle} from '../../firebase/firebase.utils'
import { useState } from 'react';


const SignIn=({emailSignInStart,signInWithGoogle})=>{
const [userCredentials,setCredentials]=useState({email:'',password:''})

const {email,password}=userCredentials;

  const  handleSubmit=async event=>{
        event.preventDefault();      
       emailSignInStart(email,password)
      
    }

   const handleChange=event=>{
        const {value,name} = event.target;
        setCredentials({...userCredentials,[name]:value})
    }

        return(
            <SignInContainer>
            <SignInTitle>I already have an account</SignInTitle>
            <span>Sign in with your email and password</span>
    
            <form onSubmit={handleSubmit}>
              <FormInput
                name='email'
                type='email'
                handleChange={handleChange}
                value={email}
                label='email'
                required
              />
              <FormInput
                name='password'
                type='password'
                value={password}
                handleChange={handleChange}
                label='password'
                required
              />
              <ButtonsBarContainer>
                <CustomButton type='submit'> Sign in </CustomButton>
                <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
                  Sign in with Google
                </CustomButton>
              </ButtonsBarContainer>
            </form>
          </SignInContainer>
        )
    }


export default SignIn;