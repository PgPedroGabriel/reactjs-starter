import styled from 'styled-components';

import 'react-toastify/dist/ReactToastify.min.css';

export const Container = styled.div`
  background: #fff;
  padding: 10px 20px;
  border-radius: 5px;

  form {
    display: flex;
    margin-left: auto;
    margin-right: auto;
    flex-direction: column;
    align-items: center;
    text-align: center;
    max-width: 700px;
    margin-bottom: 30px;

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

    span {
      display: block;
      color: red;
      margin: 0 0 10px;
    }
  }
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

export const ButtonSubmit = styled.button.attrs(props => ({
  type: 'submit',
  disabled: props.loading === 'true',
}))`
  background: #00a5fe;
  color: #fff;
  font-weight: bold;
  border: 1px solid;
  padding: 10px 90px;

  &[disabled] {
    cursor: not-allowed;
    opacity: 0.6;
  }
`;

export const Loading = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 10px;
  font-size: 15px;
  svg {
    margin-right: 5px;
    animation: spin 2s linear infinite;
  }

  @keyframes spin {
    100% {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
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
