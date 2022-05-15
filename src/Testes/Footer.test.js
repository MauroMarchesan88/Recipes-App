import { screen } from '@testing-library/react';
import React from 'react';
import App from '../App';
import renderWithRouter from './Helpers/renderWithRouter';

describe('Teste o componente <Login.js>',
  () => {
    const drinksId = 'drinks-bottom-btn';
    const exploreId = 'explore-bottom-btn';
    const foodsId = 'food-bottom-btn';

    it('Verifica os data-testids dos elementos', async () => {
      renderWithRouter(<App />, '/foods');

      const footer = await screen.findByTestId('footer');
      const drinksBtn = await screen.findByTestId(drinksId);
      const exploreBtn = await screen.findByTestId(exploreId);
      const foodsBtn = await screen.findByTestId(foodsId);

      expect(footer).toBeInTheDocument();
      expect(drinksBtn).toBeInTheDocument();
      expect(exploreBtn).toBeInTheDocument();
      expect(foodsBtn).toBeInTheDocument();
    });
  });
