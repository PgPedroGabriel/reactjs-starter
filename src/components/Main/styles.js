import styled from 'styled-components';

import 'react-toastify/dist/ReactToastify.min.css';

export const Text = styled.h1`
  color: #000;
`;

export const Container = styled.div`
  background: #ffffff;
  padding: 10px 20px;
  border-radius: 5px;
  display: flex;
  justify-content: space-between;
`;

export const List = styled.ul`
  list-style: none;
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
