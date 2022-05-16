import '@testing-library/jest-dom';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import { act } from 'react-dom/test-utils';
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
    it('Os botoes de filtros funcionam corretamente',
      async () => {
        act(() => {
          renderWithRouter(<App />, routeToRecipe);
        });
        const nameArray = await screen.findAllByTestId(/\d-card-name/gm);
        const dropdown = screen.getByRole('combobox');

        act(() => {
          userEvent.selectOptions(dropdown, 'American');
        });
        const filterIsSelected = await screen.findByText('American');
        expect(filterIsSelected).toBeInTheDocument();

        const firstRecipe = await screen.findByText('Banana Pancakes');

        expect(firstRecipe).toBeInTheDocument();
        expect(nameArray.length).toBe(maxItemsRendered);

        act(() => {
          userEvent.selectOptions(dropdown, 'All');
        });
        const firstRecipeFilterAll = await screen.findByText('Corba');
        expect(firstRecipeFilterAll).toBeInTheDocument();
        expect(nameArray.length).toBe(maxItemsRendered);
      });
  });
