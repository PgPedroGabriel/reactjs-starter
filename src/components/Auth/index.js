import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { FaSpinner, FaStopCircle } from 'react-icons/fa';
import * as AuthActions from '../../store/modules/Auth/actions';
import {
  Container,
  Header,
  Button,
  LoginForm,
  FormGroup,
  ButtonSubmit,
  Loading,
  Error,
} from './styles';

export default function Auth() {
  const { loading, error, errorMessage, token, userId } = useSelector(
    state => state.auth
  );

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  useEffect(() => {
    console.log('effected');
    console.log(token, userId);
  }, [token, userId]);

  function handleSubmit(e) {
    e.preventDefault();

    dispatch(AuthActions.auth(email, password));
  }

  return (
    <Container>
      <Header>
        <h1>Login</h1>
        <Link to="/">
          <Button>Voltar</Button>
        </Link>
      </Header>
      <LoginForm onSubmit={handleSubmit}>
        {loading ? (
          <Loading>
            <FaSpinner />
            Carregando...
          </Loading>
        ) : (
          ''
        )}
        <FormGroup>
          <p>E-mail</p>
          <input
            placeholder="Ex: devpedrogabriel@gmail.com"
            type="email"
            name="email"
            id="email"
            onChange={e => setEmail(e.target.value)}
            value={email}
          />
        </FormGroup>
        <FormGroup>
          <p>Senha</p>
          <input
            placeholder="Senha"
            type="password"
            name="password"
            id="password"
            onChange={e => setPassword(e.target.value)}
            value={password}
          />
        </FormGroup>
        <FormGroup>
          <ButtonSubmit loading={loading.toString()}>Entrar</ButtonSubmit>
        </FormGroup>
        {error ? (
          <Error>
            <FaStopCircle />
            {errorMessage}
          </Error>
        ) : (
          ''
        )}
      </LoginForm>
    </Container>
  );
}
