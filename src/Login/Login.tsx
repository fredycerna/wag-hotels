import React from 'react';
import {
  Container,
  Header,
  Logo,
  LoginForm,
  LoginTitle,
  InputLabel,
  Input,
  LoginButton,
  LinksContainer,
  ForgotPasswordLink,
  SignUpLink,
} from './styles';

const Login: React.FC = () => {
  return (
    <Container>
      <Header>
        <Logo src='/images/logo.png' alt='Logo' />
      </Header>
      <LoginForm>
        <LoginTitle>Login</LoginTitle>
        <InputLabel htmlFor='email'>Email</InputLabel>
        <Input type='email' id='email' />
        <InputLabel htmlFor='password'>Password</InputLabel>
        <Input type='password' id='password' />
        <LoginButton type='submit'>Login</LoginButton>
        <LinksContainer>
          <ForgotPasswordLink href='#'>Forgot Password?</ForgotPasswordLink>
          <SignUpLink href='#'>Sign Up</SignUpLink>
        </LinksContainer>
      </LoginForm>
    </Container>
  );
};

export default Login;
