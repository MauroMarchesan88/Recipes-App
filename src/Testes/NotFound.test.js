import '@testing-library/jest-dom';
import { screen } from '@testing-library/react';
import React from 'react';
import App from '../App';
import renderWithRouter from './Helpers/renderWithRouter';

describe('Teste o componente <NotFound.js>',
  () => {
    it('"Not Found" sera exibido caso a rota seja "/explore/drinks/nationalities"',
      async () => {
        renderWithRouter(<App />, '/explore/drinks/nationalities');

        const message = await screen.findByText('Not Found');

        expect(message).toBeInTheDocument();
      });
  });
