import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { store } from '~/store/index';

export default function RouteSecurity({
  isPrivate,
  onlyNotLogged,
  redirectTo,
  component: Component,
  ...rest
}) {
  if (isPrivate || onlyNotLogged) {
    const { token } = store.getState().auth;

    if (!token && isPrivate) {
      return <Redirect to="/" />;
    }

    if (token && onlyNotLogged) {
      return <Redirect to={redirectTo} />;
    }
  }

  // eslint-disable-next-line react/jsx-props-no-spreading
  return <Route {...rest} component={Component} />;
}

RouteSecurity.propTypes = {
  isPrivate: PropTypes.bool,
  onlyNotLogged: PropTypes.bool,
  redirectTo: PropTypes.string,
  component: PropTypes.oneOfType([PropTypes.func, PropTypes.element])
    .isRequired,
};

RouteSecurity.defaultProps = {
  isPrivate: false,
  onlyNotLogged: false,
  redirectTo: '/',
};
