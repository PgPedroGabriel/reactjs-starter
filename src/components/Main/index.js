import React, { useEffect } from 'react';
import { toast } from 'react-toastify';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import * as ListActions from '~/store/modules/List/actions';
import { logout } from '~/store/modules/Auth/actions';
import { Text, Container, List, Button } from './styles';

export default function Main() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(ListActions.getList());
  }, [dispatch]);

  function handleLogout() {
    dispatch(logout());
  }

  const { data, error, loading, token } = useSelector(state => ({
    ...state.list,
    token: state.auth.token,
  }));

  useEffect(() => {
    if (error) {
      toast.error('Ocorreu uma falha ao se conectar com o servidor');
    }
  }, [error]);

  const showLogin = token === null;

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
      {showLogin && (
        <Link to="login">
          <Button>Login </Button>
        </Link>
      )}
      {!showLogin && (
        <>
          <Link to="profile">
            <Button>Perfil</Button>
          </Link>
          <Button onClick={handleLogout}>Logout</Button>
        </>
      )}
    </Container>
  );
}
