import '@testing-library/jest-dom';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import App from '../App';
import renderWithRouter from './Helpers/renderWithRouter';

describe('Teste o componente <DoneRecipes.js>',
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
    const foodFilterId = 'filter-by-food-btn';
    const drinkFilterId = 'filter-by-drink-btn';
    const allFilterId = 'filter-by-all-btn';
    const horizTopTextId = '0-horizontal-top-text';
    const horizNameId = '0-horizontal-name';
    const horizDoneDateId = '0-horizontal-done-date';
    const horizShareBtnId = '0-horizontal-share-btn';
    const pastaTagId = '0-Pasta-horizontal-tag';
    const curryTagId = '0-Curry-horizontal-tag';
    const horizImageId = '1-horizontal-image';
    const horizTopTextId1 = '1-horizontal-top-text';
    const horizNameId1 = '1-horizontal-name';
    const horizShareBtnId1 = '1-horizontal-share-btn';
    const horizDoneDateId1 = '1-horizontal-done-date';
    localStorage.setItem('doneRecipes', JSON.stringify(doneRecipes));

    it('Todos os data-testids estão disponíveis', async () => {
      renderWithRouter(<App />, '/done-recipes');

      const foodFilter = await screen.findByTestId(foodFilterId);
      const drinkFilter = await screen.findByTestId(drinkFilterId);
      const allFilter = await screen.findByTestId(allFilterId);
      const horizTopText = await screen.findByTestId(horizTopTextId);
      const horizName = await screen.findByTestId(horizNameId);
      const horizDoneDate = await screen.findByTestId(horizDoneDateId);
      const horizShareBtn = await screen.findByTestId(horizShareBtnId);
      const pastaTag = await screen.findByTestId(pastaTagId);
      const curryTag = await screen.findByTestId(curryTagId);
      const horizImage = await screen.findByTestId(horizImageId);
      const horizTopText1 = await screen.findByTestId(horizTopTextId1);
      const horizName1 = await screen.findByTestId(horizNameId1);
      const horizShareBtn1 = await screen.findByTestId(horizShareBtnId1);
      const horizDoneDate1 = await screen.findByTestId(horizDoneDateId1);

      expect(foodFilter).toBeInTheDocument();
      expect(drinkFilter).toBeInTheDocument();
      expect(allFilter).toBeInTheDocument();
      expect(horizTopText).toBeInTheDocument();
      expect(horizName).toBeInTheDocument();
      expect(horizDoneDate).toBeInTheDocument();
      expect(horizShareBtn).toBeInTheDocument();
      expect(pastaTag).toBeInTheDocument();
      expect(curryTag).toBeInTheDocument();
      expect(horizImage).toBeInTheDocument();
      expect(horizTopText1).toBeInTheDocument();
      expect(horizName1).toBeInTheDocument();
      expect(horizShareBtn1).toBeInTheDocument();
      expect(horizDoneDate1).toBeInTheDocument();
    });
    it('Filtro All funciona', async () => {
      renderWithRouter(<App />, '/done-recipes');

      const allFilter = await screen.findByTestId(allFilterId);
      userEvent.click(allFilter);

      const filteredFood = await screen.findByText('Spicy Arrabiata Penne');
      const filteredDrink = await screen.findByText('Aquamarine');

      expect(filteredFood).toBeInTheDocument();
      expect(filteredDrink).toBeInTheDocument();
    });
    it('Filtro Drinks funciona', async () => {
      renderWithRouter(<App />, '/done-recipes');

      const drinkFilter = await screen.findByTestId(drinkFilterId);
      userEvent.click(drinkFilter);

      const filteredDrink = await screen.findByText('Aquamarine');

      expect(filteredDrink).toBeInTheDocument();
    });
  });
