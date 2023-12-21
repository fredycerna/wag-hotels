import styled from 'styled-components';
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: url('/images/bg.png') repeat;
`;

export const Header = styled.header`
  position: absolute;
  top: 10px;
  left: 10px;
`;

export const Logo = styled.img`
  width: 50px;
  height: 50px;
`;

export const LoginForm = styled.form`
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  max-width: 400px;
  width: 100%;
  text-align: center;
`;

export const LoginTitle = styled.h2`
  margin-bottom: 20px;
`;

export const InputLabel = styled.label`
  display: block;
  margin-bottom: 8px;
`;

export const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin-bottom: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

export const LoginButton = styled.button`
  background-color: #f69438;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

export const LinksContainer = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
`;

export const ForgotPasswordLink = styled.a`
  color: #666;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

export const SignUpLink = styled.a`
  color: #666;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;
