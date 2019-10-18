import styled from 'styled-components';

export const Container = styled.div`
  background: #fff;
  padding: 10px 20px;
  border-radius: 5px;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  border-bottom: 1px solid black;
  margin-bottom: 30px;
`;

export const Button = styled.button.attrs({
  type: 'button',
})`
  background: #fff;
  color: #000;
  text-align: center;
  align-items: center;
  padding: 10px;
  border: 0;
  border-radius: 5px;
  font-weight: bold;
`;

export const LoginForm = styled.form`
  display: block;
  margin-left: auto;
  margin-right: auto;
  align-items: center;
  text-align: center;
  max-width: 700px;
  margin-bottom: 30px;
`;

export const FormGroup = styled.div`
  p {
    margin-bottom: 10px;
  }

  input {
    border-radius: 5px;
    margin-bottom: 10px;
    border: 1px solid #3f974c;
    padding: 10px 20px;
    text-align: center;
  }
`;

export const ButtonSubmit = styled.button.attrs({
  type: 'submit',
})`
  margin-top: 20px;
  background: #00a5fe;
  color: #fff;
  font-weight: bold;
  border: 1px solid;
  padding: 10px 90px;
`;

export const Loading = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 10px;
  font-size: 15px;
  svg {
    margin-right: 5px;
  }
`;

export const Error = styled.div`
  padding: 10px;
  margin-top: 20px;
  background-color: #e74c3c;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 220px;
  margin-left: auto;
  margin-right: auto;
  svg {
    font-size: 16px;
    margin-right: 5px;
  }
`;
