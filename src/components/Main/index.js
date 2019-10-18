import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import * as ListActions from '../../store/modules/List/actions';
import { Text, Container, List, Button } from './styles';

export default function Main() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(ListActions.getList());
  }, [dispatch]);

  const { data, error, loading } = useSelector(state => state.list);

  return (
    <Container>
      {loading ? <p>Carregando...</p> : ''}
      {error ? <p>Ocorreu uma falha ao se conectar com o servidor</p> : ''}
      <List>
        {data.map(l => (
          <li key={l.id}>
            <Text>{l.name}</Text>
          </li>
        ))}
      </List>
      <Link to="login">
        <Button>Login </Button>
      </Link>
    </Container>
  );
}
