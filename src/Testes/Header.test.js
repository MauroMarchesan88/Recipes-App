import '@testing-library/jest-dom';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import App from '../App';
import renderWithRouter from './Helpers/renderWithRouter';

describe('Teste o componente <Header.js>',
  () => {
    const profile = 'profile-top-btn';
    const pageTitle = 'page-title';
    const searchTopBtn = 'search-top-btn';
    const profileSRC = 'profileIcon.svg';
    const searchSRC = 'searchIcon.svg';
    const recipe = '0-recipe-card';
    const testId = 'data-testid';

    it('Nao tem Header na tela de Login', () => {
      renderWithRouter(<App />);

      const profileBtn = screen.queryByTestId(profile);
      const title = screen.queryByTestId(pageTitle);
      const searchBtn = screen.queryByTestId(searchTopBtn);

      expect(profileBtn).not.toBe();
      expect(title).not.toBe();
      expect(searchBtn).not.toBe();
    });
    it('O header tem os ícones corretos na tela de principal de receitas de comidas',
      async () => {
        renderWithRouter(<App />, '/foods');

        const profileBtn = screen.getByTestId(profile);
        const searchBtn = screen.getByTestId(searchTopBtn);
        const titleText = await screen.findByText('Foods');

        expect(profileBtn).toHaveAttribute('src', profileSRC);
        expect(searchBtn).toHaveAttribute('src', searchSRC);
        expect(titleText).toHaveAttribute(testId, pageTitle);
      });
    it('Não tem header na tela de detalhes de uma receita de comida', async () => {
      renderWithRouter(<App />, '/foods');

      const firstRecipe = await screen.findByTestId(recipe);
      userEvent.click(firstRecipe);

      const profileBtn = screen.queryByTestId(profile);
      const searchBtn = screen.queryByTestId(searchTopBtn);

      expect(profileBtn).not.toBe();
      expect(searchBtn).not.toBe();
    });
    it('Não tem header na tela de receita em progresso de comida', () => {
      renderWithRouter(<App />, '/foods/52977');

      const initRecipe = screen.queryByTestId('start-recipe-btn');
      userEvent.click(initRecipe);

      const profileBtn = screen.queryByTestId(profile);
      const searchBtn = screen.queryByTestId(searchTopBtn);

      expect(profileBtn).not.toBe();
      expect(searchBtn).not.toBe();
    });
    it('O header tem os ícones corretos na tela de principal de receitas de bebidas',
      async () => {
        renderWithRouter(<App />, '/drinks');

        const profileBtn = await screen.findByTestId(profile);
        const searchBtn = await screen.findByTestId(searchTopBtn);
        const titleText = await screen.findByText('Drinks');

        expect(profileBtn).toBeInTheDocument();
        expect(searchBtn).toBeInTheDocument();
        expect(titleText).toHaveAttribute(testId, pageTitle);
      });
    it('Não tem header na tela de detalhes de uma receita de bebidas', async () => {
      renderWithRouter(<App />, '/drinks');

      const firstRecipe = await screen.findByTestId(recipe);
      userEvent.click(firstRecipe);

      const profileBtn = screen.queryByTestId(profile);
      const title = screen.queryByTestId(pageTitle);
      const searchBtn = screen.queryByTestId(searchTopBtn);

      expect(profileBtn).not.toBe();
      expect(title).not.toBe();
      expect(searchBtn).not.toBe();
    });
    it('Não tem header na tela de receita em progresso de bebida', () => {
      renderWithRouter(<App />, '/drinks/15997');

      const initRecipe = screen.queryByTestId('start-recipe-btn');
      userEvent.click(initRecipe);

      const profileBtn = screen.queryByTestId(profile);
      const searchBtn = screen.queryByTestId(searchTopBtn);

      expect(profileBtn).not.toBe();
      expect(searchBtn).not.toBe();
    });
    it('O header tem os ícones corretos na tela de explorar',
      async () => {
        renderWithRouter(<App />, '/explore');

        const profileBtn = await screen.findByTestId(profile);
        const searchBtn = screen.queryByTestId(searchTopBtn);
        const titleText = await screen.findByText('Explore');

        expect(profileBtn).toBeInTheDocument();
        expect(searchBtn).not.toBeInTheDocument();
        expect(titleText).toHaveAttribute(testId, pageTitle);
      });
    it('O header tem os ícones corretos na tela de explorar comidas',
      async () => {
        renderWithRouter(<App />, '/explore/foods');

        const profileBtn = await screen.findByTestId(profile);
        const searchBtn = screen.queryByTestId(searchTopBtn);
        const titleText = await screen.findByText('Explore Foods');

        expect(profileBtn).toBeInTheDocument();
        expect(searchBtn).not.toBeInTheDocument();
        expect(titleText).toHaveAttribute(testId, pageTitle);
      });
    it('O header tem os ícones corretos na tela de explorar bebidas',
      async () => {
        renderWithRouter(<App />, '/explore/drinks');

        const profileBtn = await screen.findByTestId(profile);
        const searchBtn = screen.queryByTestId(searchTopBtn);
        const titleText = await screen.findByText('Explore Drinks');

        expect(profileBtn).toBeInTheDocument();
        expect(searchBtn).not.toBeInTheDocument();
        expect(titleText).toHaveAttribute(testId, pageTitle);
      });
    it('O header tem os ícones corretos na tela de explorar comidas por ingredientes',
      async () => {
        renderWithRouter(<App />, '/explore/foods/ingredients');

        const profileBtn = await screen.findByTestId(profile);
        const searchBtn = screen.queryByTestId(searchTopBtn);
        const titleText = await screen.findByText('Explore Ingredients');

        expect(profileBtn).toBeInTheDocument();
        expect(searchBtn).not.toBeInTheDocument();
        expect(titleText).toHaveAttribute(testId, pageTitle);
      });
    it('O header tem os ícones corretos na tela de explorar bebidas por ingredientes',
      async () => {
        renderWithRouter(<App />, '/explore/drinks/ingredients');

        const profileBtn = await screen.findByTestId(profile);
        const searchBtn = screen.queryByTestId(searchTopBtn);
        const titleText = await screen.findByText('Explore Ingredients');

        expect(profileBtn).toBeInTheDocument();
        expect(searchBtn).not.toBeInTheDocument();
        expect(titleText).toHaveAttribute(testId, pageTitle);
      });
    it('O header tem os ícones corretos na tela de explorar comidas por nacionalidade',
      async () => {
        renderWithRouter(<App />, '/explore/foods/nationalities');

        const profileBtn = await screen.findByTestId(profile);
        const searchBtn = screen.queryByTestId(searchTopBtn);
        const titleText = await screen.findByText('Explore Nationalities');

        expect(profileBtn).toBeInTheDocument();
        expect(searchBtn).toBeInTheDocument();
        expect(titleText).toHaveAttribute(testId, pageTitle);
      });
    it('O header tem os ícones corretos na tela de receitas feitas',
      async () => {
        renderWithRouter(<App />, '/done-recipes');

        const profileBtn = await screen.findByTestId(profile);
        const searchBtn = screen.queryByTestId(searchTopBtn);
        const titleText = await screen.findByText('Done Recipes');

        expect(profileBtn).toBeInTheDocument();
        expect(searchBtn).not.toBeInTheDocument();
        expect(titleText).toHaveAttribute(testId, pageTitle);
      });
    it('O header tem os ícones corretos na tela de receitas favoritas',
      async () => {
        renderWithRouter(<App />, '/favorite-recipes');

        const profileBtn = await screen.findByTestId(profile);
        const searchBtn = screen.queryByTestId(searchTopBtn);
        const titleText = await screen.findByText('Favorite Recipes');

        expect(profileBtn).toBeInTheDocument();
        expect(searchBtn).not.toBeInTheDocument();
        expect(titleText).toHaveAttribute(testId, pageTitle);
      });
    it('Redireciona a pessoa usuária para a tela de perfil ao clicar no botão de perfil',
      async () => {
        renderWithRouter(<App />, '/foods');

        const titleText = await screen.findByText('Foods');
        const profileBtn = await screen.findByTestId(profile);

        expect(titleText).toHaveAttribute(testId, pageTitle);
        userEvent.click(profileBtn);

        const nextTitle = await screen.findByText('Profile');

        expect(nextTitle).toHaveAttribute(testId, pageTitle);
      });
    it('Ao clicar no botão de busca pela primeira vez a barra de busca aparece',
      async () => {
        renderWithRouter(<App />, '/foods');

        const searchBtn = screen.queryByTestId(searchTopBtn);
        const searchHidden = screen.queryByTestId('search-input');

        expect(searchHidden).not.toBeInTheDocument();
        userEvent.click(searchBtn);

        const searchVisible = await screen.findByTestId('search-input');
        expect(searchVisible).toBeInTheDocument();
      });
  });
