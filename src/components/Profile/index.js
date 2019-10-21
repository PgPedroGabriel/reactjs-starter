import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { Container } from './styles';

export default function Profile() {
  const { user } = useSelector(state => state.user);

  return (
    <Container>
      <p>{user.name}</p>
      <p>{user.email}</p>
      <Link to="/">Voltar</Link>
    </Container>
  );
}
