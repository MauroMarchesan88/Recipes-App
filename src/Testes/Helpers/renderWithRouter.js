import { render } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import React from 'react';
import { Router } from 'react-router-dom';
import AppProvider from '../../context/AppProvider';

function renderWithRouter(component, route = '/') {
  const history = createMemoryHistory({ initialEntries: [route] });

  return ({
    ...render(
      <AppProvider>
        <Router history={ history }>{component}</Router>
      </AppProvider>,
    ),
    history,
  });
}

export default renderWithRouter;
