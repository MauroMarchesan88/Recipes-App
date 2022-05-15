import '@testing-library/jest-dom';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import App from '../App';
import renderWithRouter from './Helpers/renderWithRouter';

describe('Teste o componente <BarraDeBusca.js>',
  () => {
    const searchTopBtnId = 'search-top-btn';
    const searchInputId = 'search-input';
    const ingredientSearchId = 'ingredient-search-radio';
    const nameSearchId = 'name-search-radio';
    const firstLetterSearchId = 'first-letter-search-radio';
    const searchBtnId = 'exec-search-btn';

    it('Tem os data-testids tanto da barra de busca quanto de todos os radio-buttons',
      async () => {
        renderWithRouter(<App />, '/foods');

        const searchTopBtn = await screen.findByTestId(searchTopBtnId);
        userEvent.click(searchTopBtn);

        const searchInput = await screen.findByTestId(searchInputId);
        const ingredientSearch = await screen.findByTestId(ingredientSearchId);
        const nameSearch = await screen.findByTestId(nameSearchId);
        const firstLetterSearch = await screen.findByTestId(firstLetterSearchId);
        const searchBtn = await screen.findByTestId(searchBtnId);

        expect(searchTopBtn).toBeInTheDocument();
        expect(searchInput).toBeInTheDocument();
        expect(ingredientSearch).toBeInTheDocument();
        expect(nameSearch).toBeInTheDocument();
        expect(firstLetterSearch).toBeInTheDocument();
        expect(searchBtn).toBeInTheDocument();
      });
    it('Com busca por Ingredient, a busca na API é feita corretamente pelo ingrediente',
      async () => {
        renderWithRouter(<App />, '/foods');

        const searchTopBtn = await screen.findByTestId(searchTopBtnId);
        userEvent.click(searchTopBtn);

        const searchInput = await screen.findByTestId(searchInputId);
        const ingredientSearch = await screen.findByTestId(ingredientSearchId);
        const searchBtn = await screen.findByTestId(searchBtnId);

        userEvent.click(ingredientSearch);
        userEvent.type(searchInput, 'chicken');
        userEvent.click(searchBtn);

        const receita = await screen.findByText('Brown Stew Chicken');

        expect(receita).toBeInTheDocument();
      });
    it('Com busca First letter, a busca na API é feita corretamente pelo ingrediente',
      async () => {
        renderWithRouter(<App />, '/foods');

        const searchTopBtn = await screen.findByTestId(searchTopBtnId);
        userEvent.click(searchTopBtn);

        const searchInput = await screen.findByTestId(searchInputId);
        const firstLetterSearch = await screen.findByTestId(firstLetterSearchId);
        const searchBtn = await screen.findByTestId(searchBtnId);

        userEvent.click(firstLetterSearch);
        userEvent.type(searchInput, 'c');
        userEvent.click(searchBtn);

        const receita = await screen.findByText('Chocolate Gateau');

        expect(receita).toBeInTheDocument();
      });
    it('Com busca Name, a busca na API é feita corretamente pelo ingrediente',
      async () => {
        renderWithRouter(<App />, '/foods');

        const searchTopBtn = await screen.findByTestId(searchTopBtnId);
        userEvent.click(searchTopBtn);

        const searchInput = await screen.findByTestId(searchInputId);
        const nameSearch = await screen.findByTestId(nameSearchId);
        const searchBtn = await screen.findByTestId(searchBtnId);

        userEvent.click(nameSearch);
        userEvent.type(searchInput, 'soup');
        userEvent.click(searchBtn);

        const receita = await screen.findByText('Leblebi Soup');
        expect(receita).toBeInTheDocument();
      });
    it('Tem os data-testids tanto da barra de busca quanto de todos os radio-buttons',
      async () => {
        renderWithRouter(<App />, '/drinks');

        const searchTopBtn = await screen.findByTestId(searchTopBtnId);
        userEvent.click(searchTopBtn);

        const searchInput = await screen.findByTestId(searchInputId);
        const ingredientSearch = await screen.findByTestId(ingredientSearchId);
        const nameSearch = await screen.findByTestId(nameSearchId);
        const firstLetterSearch = await screen.findByTestId(firstLetterSearchId);
        const searchBtn = await screen.findByTestId(searchBtnId);

        expect(searchTopBtn).toBeInTheDocument();
        expect(searchInput).toBeInTheDocument();
        expect(ingredientSearch).toBeInTheDocument();
        expect(nameSearch).toBeInTheDocument();
        expect(firstLetterSearch).toBeInTheDocument();
        expect(searchBtn).toBeInTheDocument();
      });
    it('Com busca por Ingredient, a busca na API é feita corretamente pelo ingrediente',
      async () => {
        renderWithRouter(<App />, '/drinks');

        const searchTopBtn = await screen.findByTestId(searchTopBtnId);
        userEvent.click(searchTopBtn);

        const searchInput = await screen.findByTestId(searchInputId);
        const ingredientSearch = await screen.findByTestId(ingredientSearchId);
        const searchBtn = await screen.findByTestId(searchBtnId);

        userEvent.click(ingredientSearch);
        userEvent.type(searchInput, 'lemon');
        userEvent.click(searchBtn);

        const receita = await screen.findByText('Boston Sour');

        expect(receita).toBeInTheDocument();
      });
    it('Com busca First letter, a busca na API é feita corretamente pelo ingrediente',
      async () => {
        renderWithRouter(<App />, '/drinks');

        const searchTopBtn = await screen.findByTestId(searchTopBtnId);
        userEvent.click(searchTopBtn);

        const searchInput = await screen.findByTestId(searchInputId);
        const firstLetterSearch = await screen.findByTestId(firstLetterSearchId);
        const searchBtn = await screen.findByTestId(searchBtnId);

        userEvent.click(firstLetterSearch);
        userEvent.type(searchInput, 'a');
        userEvent.click(searchBtn);

        const receita = await screen.findByText('A1');

        expect(receita).toBeInTheDocument();
      });
    it('Com busca Name, a busca na API é feita corretamente pelo ingrediente',
      async () => {
        renderWithRouter(<App />, '/drinks');

        const searchTopBtn = await screen.findByTestId(searchTopBtnId);
        userEvent.click(searchTopBtn);

        const searchInput = await screen.findByTestId(searchInputId);
        const nameSearch = await screen.findByTestId(nameSearchId);
        const searchBtn = await screen.findByTestId(searchBtnId);

        userEvent.click(nameSearch);
        userEvent.type(searchInput, 'gin');
        userEvent.click(searchBtn);

        const receita = await screen.findByText('Gin Fizz');
        expect(receita).toBeInTheDocument();
      });
  });
