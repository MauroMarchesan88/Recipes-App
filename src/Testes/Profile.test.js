import '@testing-library/jest-dom';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
// import userEvent from '@testing-library/user-event';
import React from 'react';
import App from '../App';
import renderWithRouter from './Helpers/renderWithRouter';

describe('Teste o componente <Foods.js>',
  () => {
    const doneRecipes = [
      {
        id: '52771',
        type: 'food',
        nationality: 'Italian',
        category: 'Vegetarian',
        alcoholicOrNot: '',
        name: 'Spicy Arrabiata Penne',
        image: 'https://www.themealdb.com/images/media/meals/ustsqw1468250014.jpg',
        doneDate: '23/06/2020',
        tags: ['Pasta', 'Curry'],
      },
      {
        id: '178319',
        type: 'drink',
        nationality: '',
        category: 'Cocktail',
        alcoholicOrNot: 'Alcoholic',
        name: 'Aquamarine',
        image: 'https://www.thecocktaildb.com/images/media/drink/zvsre31572902738.jpg',
        doneDate: '23/06/2020',
        tags: [],
      },
    ];
    const profileId = 'profile-email';
    const profileDoneBtnId = 'profile-done-btn';
    const profileFavBtnId = 'profile-favorite-btn';
    const profileLogoutBtnId = 'profile-logout-btn';
    const routeToRecipe = '/profile';

    localStorage.setItem('user', '{ "email": "email@mail.com" }');
    localStorage.setItem('doneRecipes', JSON.stringify(doneRecipes));
    localStorage.setItem('favoriteRecipes', JSON.stringify(doneRecipes));

    it('Todos o data-testid do email e de todos os botões', async () => {
      renderWithRouter(<App />, routeToRecipe);

      const email = await screen.findByTestId(profileId);
      const profileDoneBtn = await screen.findByTestId(profileDoneBtnId);
      const profileFavBtn = await screen.findByTestId(profileFavBtnId);
      const profileLogoutBtn = await screen.findByTestId(profileLogoutBtnId);

      expect(email).toBeInTheDocument();
      expect(profileDoneBtn).toBeInTheDocument();
      expect(profileFavBtn).toBeInTheDocument();
      expect(profileLogoutBtn).toBeInTheDocument();
    });
    it('O e-mail armazenado em localStorage está visível', async () => {
      renderWithRouter(<App />, routeToRecipe);

      const storedEmail = JSON.parse(localStorage.getItem('user'));
      const email = await screen.findByTestId(profileId);

      expect([email.innerHTML]).toStrictEqual(Object.values(storedEmail));
    });
    it('O botão "Done Recipes" Redireciona para a rota correta', async () => {
      renderWithRouter(<App />, routeToRecipe);

      const profileDoneBtn = await screen.findByTestId(profileDoneBtnId);
      userEvent.click(profileDoneBtn);

      const filteredDrink = await screen.findByText('Aquamarine');

      expect(filteredDrink).toBeInTheDocument();
    });
    it('O botão "Favorite Recipes" Redireciona para a rota correta', async () => {
      renderWithRouter(<App />, routeToRecipe);

      const profileFavBtn = await screen.findByTestId(profileFavBtnId);
      userEvent.click(profileFavBtn);

      const filteredDrink = await screen.findByText('Aquamarine');

      expect(filteredDrink).toBeInTheDocument();
    });
    it('O botão "Logout" Redireciona para a rota correta e limpa localStorage',
      async () => {
        renderWithRouter(<App />, routeToRecipe);

        const profileLogoutBtn = await screen.findByTestId(profileLogoutBtnId);
        userEvent.click(profileLogoutBtn);

        const emailInicial = await screen.findByTestId('email-input');
        const localFav = localStorage.getItem('favoriteRecipes');
        const localDone = localStorage.getItem('doneRecipes');

        expect(emailInicial).toBeInTheDocument();
        expect(localDone).toBe(null);
        expect(localFav).toBe(null);
      });
  });
