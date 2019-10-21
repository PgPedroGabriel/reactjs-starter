import React, { useEffect } from 'react';
import { toast } from 'react-toastify';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { FaSpinner, FaStopCircle } from 'react-icons/fa';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';
import * as AuthActions from '../../store/modules/Auth/actions';
import history from '../../services/history';
import {
  Container,
  Header,
  Button,
  ButtonSubmit,
  Loading,
  Error,
} from './styles';

const schemaValidation = Yup.object().shape({
  email: Yup.string()
    .email('Preencha um email válido.')
    .required('O email é obrigatório'),
  password: Yup.string()
    .min(6, 'Informe no mínimo 6 caracteres')
    .required('Campo obrigatório'),
});

export default function Auth() {
  const { loading, error, errorMessage, token } = useSelector(
    state => state.auth
  );

  const dispatch = useDispatch();

  useEffect(() => {
    if (token) {
      history.push('/');
    }
  }, [token]);

  useEffect(() => {
    if (error) {
      toast.error(errorMessage);
    }
  }, [error, errorMessage]);

  function handleSubmit({ email, password }) {
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
      <Form schema={schemaValidation} onSubmit={handleSubmit}>
        {loading ? (
          <Loading>
            <FaSpinner />
            Carregando...
          </Loading>
        ) : (
          ''
        )}
        <Input placeholder="E-mail" type="text" name="email" id="email" />
        <Input
          placeholder="Senha"
          type="password"
          name="password"
          id="password"
        />
        <ButtonSubmit loading={loading.toString()}>Entrar</ButtonSubmit>
        {error ? (
          <Error>
            <FaStopCircle />
            {errorMessage}
          </Error>
        ) : (
          ''
        )}
      </Form>
    </Container>
  );
}
