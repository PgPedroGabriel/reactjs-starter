import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as ListActions from '../store/modules/List/actions';
import { Text } from './styles';

// eslint-disable-next-line react/prop-types
export default function Main() {
  const list = useSelector(state => state.list);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(ListActions.showRequest());
  }, [dispatch]);

  return (
    <>
      <ul>
        {list.map(l => (
          <li key={l.id}>
            <Text>{l.name}</Text>
          </li>
        ))}
      </ul>
    </>
  );
}
