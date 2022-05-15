import '@testing-library/jest-dom';
import { screen } from '@testing-library/react';
// import userEvent from '@testing-library/user-event';
import React from 'react';
import App from '../App';
import renderWithRouter from './Helpers/renderWithRouter';

describe('Teste o componente <RecipesNationality.js>',
  () => {
    const maxItemsRendered = 12;
    const maxOptions = 28;
    const routeToRecipe = '/explore/foods/nationalities';

    it('A tela tem os data-testids de todos os 12 cards e de todas as nacionalidades',
      async () => {
        renderWithRouter(<App />, routeToRecipe);

        const idArray = await screen.findAllByTestId(/\d-recipe-card/gm);
        const imgArray = await screen.findAllByTestId(/\d-card-img/gm);
        const nameArray = await screen.findAllByTestId(/\d-card-name/gm);
        const dropdown = await screen.findByTestId('explore-by-nationality-dropdown');
        const dropdownOptions = await screen.findAllByRole('option');

        expect(idArray.length).toBe(maxItemsRendered);
        expect(imgArray.length).toBe(maxItemsRendered);
        expect(nameArray.length).toBe(maxItemsRendered);
        expect(dropdown).toBeInTheDocument();
        expect(dropdownOptions.length).toBe(maxOptions);
      });
  });
