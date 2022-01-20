
import SignIn from '../../components/sign-in/sign-in.component';
import Signup from '../../components/sign-up/sign-up.component';
import { SignInAndSignUpContainer } from './sign-in-and-sign-up';

const SignInAndSignUp=()=>(
    <SignInAndSignUpContainer>
    <SignIn />
    <Signup />
  </SignInAndSignUpContainer>
)

export default SignInAndSignUp