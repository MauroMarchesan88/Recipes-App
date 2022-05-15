import '@testing-library/jest-dom';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import App from '../App';
import renderWithRouter from './Helpers/renderWithRouter';

describe('Teste o componente <Foods.js>',
  () => {
    const maxItemsRendered = 12;
    const ordinaryFilterId = 'Ordinary Drink-category-filter';
    const cocktailFilterId = 'Cocktail-category-filter';
    const shakeFilterId = 'Shake-category-filter';
    const otherFilterId = 'Other/Unknown-category-filter';
    const cocoaFilterId = 'Cocoa-category-filter';
    const allFilterId = 'All-category-filter';

    it('A tela tem os data-testids de todos os 12 cards da tela de comidas', async () => {
      renderWithRouter(<App />, '/foods');

      const idArray = await screen.findAllByTestId(/\d-recipe-card/gm);
      const imgArray = await screen.findAllByTestId(/\d-card-img/gm);
      const nameArray = await screen.findAllByTestId(/\d-card-name/gm);

      expect(idArray.length).toBe(maxItemsRendered);
      expect(imgArray.length).toBe(maxItemsRendered);
      expect(nameArray.length).toBe(maxItemsRendered);
    });
    it('A tela tem os data-testids de todos os 12 cards da tela de bebidas', async () => {
      renderWithRouter(<App />, '/drinks');

      const idArray = await screen.findAllByTestId(/\d-recipe-card/gm);
      const imgArray = await screen.findAllByTestId(/\d-card-img/gm);
      const nameArray = await screen.findAllByTestId(/\d-card-name/gm);

      expect(idArray.length).toBe(maxItemsRendered);
      expect(imgArray.length).toBe(maxItemsRendered);
      expect(nameArray.length).toBe(maxItemsRendered);
    });
    it('Verificar as imagens (src) em cada card de bebidas', async () => {
      renderWithRouter(<App />, '/drinks');

      const imgArray = await screen.findAllByTestId(/\d-card-img/gm);

      expect(imgArray[0]).toHaveProperty('src', 'https://www.thecocktaildb.com/images/media/drink/vyxwut1468875960.jpg');
      expect(imgArray[1]).toHaveProperty('src', 'https://www.thecocktaildb.com/images/media/drink/2x8thr1504816928.jpg');
      expect(imgArray[2]).toHaveProperty('src', 'https://www.thecocktaildb.com/images/media/drink/tqpvqp1472668328.jpg');
      expect(imgArray[3]).toHaveProperty('src', 'https://www.thecocktaildb.com/images/media/drink/apneom1504370294.jpg');
      expect(imgArray[4]).toHaveProperty('src', 'https://www.thecocktaildb.com/images/media/drink/xxsxqy1472668106.jpg');
      expect(imgArray[5]).toHaveProperty('src', 'https://www.thecocktaildb.com/images/media/drink/rtpxqw1468877562.jpg');
      expect(imgArray[6]).toHaveProperty('src', 'https://www.thecocktaildb.com/images/media/drink/l3cd7f1504818306.jpg');
      expect(imgArray[7]).toHaveProperty('src', 'https://www.thecocktaildb.com/images/media/drink/v0at4i1582478473.jpg');
      expect(imgArray[8]).toHaveProperty('src', 'https://www.thecocktaildb.com/images/media/drink/rwqxrv1461866023.jpg');
      expect(imgArray[9]).toHaveProperty('src', 'https://www.thecocktaildb.com/images/media/drink/rhhwmp1493067619.jpg');
      expect(imgArray[10]).toHaveProperty('src', 'https://www.thecocktaildb.com/images/media/drink/xuxpxt1479209317.jpg');
      expect(imgArray[11]).toHaveProperty('src', 'https://www.thecocktaildb.com/images/media/drink/5a3vg61504372070.jpg');
    });
    it('Deve-se exibir as 5 primeiras categorias de bebida', async () => {
      renderWithRouter(<App />, '/drinks');

      const category1 = await screen.findByTestId(ordinaryFilterId);
      const category2 = await screen.findByTestId(cocktailFilterId);
      const category3 = await screen.findByTestId(shakeFilterId);
      const category4 = await screen.findByTestId(otherFilterId);
      const category5 = await screen.findByTestId(cocoaFilterId);

      expect(category1).toBeInTheDocument();
      expect(category2).toBeInTheDocument();
      expect(category3).toBeInTheDocument();
      expect(category4).toBeInTheDocument();
      expect(category5).toBeInTheDocument();
    });
    it('Verificar que o filtro "Ordinary Drink" funcione', async () => {
      renderWithRouter(<App />, '/drinks');
      const ordinaryFilterBtn = await screen.findByTestId(ordinaryFilterId);
      userEvent.click(ordinaryFilterBtn);

      const ordinaryDrink = await screen.findByText('3-Mile Long Island Iced Tea');

      expect(ordinaryDrink).toBeInTheDocument();
      userEvent.click(ordinaryFilterBtn);

      const allDrink = await screen.findByText('GG');
      expect(allDrink).toBeInTheDocument();
    });
    it('Verificar que o filtro "Cocktail" funcione', async () => {
      renderWithRouter(<App />, '/drinks');
      const cocktailFilterBtn = await screen.findByTestId(cocktailFilterId);
      userEvent.click(cocktailFilterBtn);

      const cocktailDrink = await screen.findByText('155 Belmont');

      expect(cocktailDrink).toBeInTheDocument();
      userEvent.click(cocktailFilterBtn);

      const allDrink = await screen.findByText('GG');
      expect(allDrink).toBeInTheDocument();
    });
    it('Verificar que o filtro "Shake" funcione', async () => {
      renderWithRouter(<App />, '/drinks');
      const shakeFilterBtn = await screen.findByTestId(shakeFilterId);
      userEvent.click(shakeFilterBtn);

      const shakeDrink = await screen.findByText('Avalanche');

      expect(shakeDrink).toBeInTheDocument();
      userEvent.click(shakeFilterBtn);

      const allDrink = await screen.findByText('GG');
      expect(allDrink).toBeInTheDocument();
    });
    it('Verificar que o filtro "Other/Unknown" funcione', async () => {
      renderWithRouter(<App />, '/drinks');
      const otherFilterBtn = await screen.findByTestId(otherFilterId);
      userEvent.click(otherFilterBtn);

      const unknownDrink = await screen.findByText('Apello');

      expect(unknownDrink).toBeInTheDocument();
      userEvent.click(otherFilterBtn);

      const allDrink = await screen.findByText('GG');
      expect(allDrink).toBeInTheDocument();
    });
    it('Verificar que o filtro "Cocoa" funcione', async () => {
      renderWithRouter(<App />, '/drinks');
      const cocoaFilterBtn = await screen.findByTestId(cocoaFilterId);
      userEvent.click(cocoaFilterBtn);

      const cocoaDrink = await screen.findByText('Chocolate Drink');

      expect(cocoaDrink).toBeInTheDocument();
      userEvent.click(cocoaFilterBtn);

      const allDrink = await screen.findByText('GG');
      expect(allDrink).toBeInTheDocument();
    });
    it('Verificar que o filtro "All" funcione', async () => {
      renderWithRouter(<App />, '/drinks');
      const allFilterBtn = await screen.findByTestId(allFilterId);
      userEvent.click(allFilterBtn);

      const allDrink = await screen.findByText('GG');

      expect(allDrink).toBeInTheDocument();
    });
    it('Verificar que nao re-renderiza vindo de ingredients', async () => {
      renderWithRouter(<App />, '/explore/drinks/ingredients');
      const ingredient = await screen.findByTestId('0-ingredient-card');
      userEvent.click(ingredient);

      const allDrink = await screen.findByText('Acapulco');

      expect(allDrink).toBeInTheDocument();
    });
  });
