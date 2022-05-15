import '@testing-library/jest-dom';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import App from '../App';
import renderWithRouter from './Helpers/renderWithRouter';

describe('Teste o componente <Foods.js>',
  () => {
    const maxItemsRendered = 12;
    const beefFilterId = 'Beef-category-filter';
    const breakfastFilterId = 'Breakfast-category-filter';
    const chickenFilterId = 'Chicken-category-filter';
    const dessertFilterId = 'Dessert-category-filter';
    const goatFilterId = 'Goat-category-filter';
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
    it('Verificar as imagens (src) em cada card de comidas', async () => {
      renderWithRouter(<App />, '/foods');

      const imgArray = await screen.findAllByTestId(/\d-card-img/gm);

      expect(imgArray[0]).toHaveProperty('src', 'https://www.themealdb.com/images/media/meals/58oia61564916529.jpg');
      expect(imgArray[1]).toHaveProperty('src', 'https://www.themealdb.com/images/media/meals/tkxquw1628771028.jpg');
      expect(imgArray[2]).toHaveProperty('src', 'https://www.themealdb.com/images/media/meals/mlchx21564916997.jpg');
      expect(imgArray[3]).toHaveProperty('src', 'https://www.themealdb.com/images/media/meals/n3xxd91598732796.jpg');
      expect(imgArray[4]).toHaveProperty('src', 'https://www.themealdb.com/images/media/meals/wuxrtu1483564410.jpg');
      expect(imgArray[5]).toHaveProperty('src', 'https://www.themealdb.com/images/media/meals/uuyrrx1487327597.jpg');
      expect(imgArray[6]).toHaveProperty('src', 'https://www.themealdb.com/images/media/meals/wtsvxx1511296896.jpg');
      expect(imgArray[7]).toHaveProperty('src', 'https://www.themealdb.com/images/media/meals/txsupu1511815755.jpg');
      expect(imgArray[8]).toHaveProperty('src', 'https://www.themealdb.com/images/media/meals/1525876468.jpg');
      expect(imgArray[9]).toHaveProperty('src', 'https://www.themealdb.com/images/media/meals/1bsv1q1560459826.jpg');
      expect(imgArray[10]).toHaveProperty('src', 'https://www.themealdb.com/images/media/meals/urzj1d1587670726.jpg');
      expect(imgArray[11]).toHaveProperty('src', 'https://www.themealdb.com/images/media/meals/4er7mj1598733193.jpg');
    });
    it('Deve-se exibir as 5 primeiras categorias de comida', async () => {
      renderWithRouter(<App />, '/foods');

      const category1 = await screen.findByTestId(beefFilterId);
      const category2 = await screen.findByTestId(breakfastFilterId);
      const category3 = await screen.findByTestId(chickenFilterId);
      const category4 = await screen.findByTestId(dessertFilterId);
      const category5 = await screen.findByTestId(goatFilterId);

      expect(category1).toBeInTheDocument();
      expect(category2).toBeInTheDocument();
      expect(category3).toBeInTheDocument();
      expect(category4).toBeInTheDocument();
      expect(category5).toBeInTheDocument();
    });
    it('Verificar que o filtro "Beef" funcione', async () => {
      renderWithRouter(<App />, '/foods');
      const beefFilterBtn = await screen.findByTestId(beefFilterId);
      userEvent.click(beefFilterBtn);

      const beefMeal = await screen.findByText('Beef and Mustard Pie');

      expect(beefMeal).toBeInTheDocument();
      userEvent.click(beefFilterBtn);

      const allMeal = await screen.findByText('Corba');
      expect(allMeal).toBeInTheDocument();
    });
    it('Verificar que o filtro "Breakfast" funcione', async () => {
      renderWithRouter(<App />, '/foods');

      const breackfastFilterBtn = await screen.findByTestId(breakfastFilterId);
      userEvent.click(breackfastFilterBtn);

      const breakfastMeal = await screen.findByText('Breakfast Potatoes');

      expect(breakfastMeal).toBeInTheDocument();
      userEvent.click(breackfastFilterBtn);

      const allMeal = await screen.findByText('Corba');
      expect(allMeal).toBeInTheDocument();
    });
    it('Verificar que o filtro "Chicken" funcione', async () => {
      renderWithRouter(<App />, '/foods');

      const chickenFilterBtn = await screen.findByTestId(chickenFilterId);
      userEvent.click(chickenFilterBtn);

      const chickenMeal = await screen.findByText('Ayam Percik');

      expect(chickenMeal).toBeInTheDocument();
      userEvent.click(chickenFilterBtn);

      const allMeal = await screen.findByText('Corba');
      expect(allMeal).toBeInTheDocument();
    });
    it('Verificar que o filtro "Dessert" funcione', async () => {
      renderWithRouter(<App />, '/foods');

      const dessertFilterBtn = await screen.findByTestId(dessertFilterId);
      userEvent.click(dessertFilterBtn);

      const dessertMeal = await screen.findByText('Apam balik');

      expect(dessertMeal).toBeInTheDocument();
      userEvent.click(dessertFilterBtn);

      const allMeal = await screen.findByText('Corba');
      expect(allMeal).toBeInTheDocument();
    });
    it('Verificar que o filtro "Goat" funcione', async () => {
      renderWithRouter(<App />, '/foods');

      const goatFilterBtn = await screen.findByTestId(goatFilterId);
      userEvent.click(goatFilterBtn);

      const goatMeal = await screen.findByText('Mbuzi Choma (Roasted Goat)');

      expect(goatMeal).toBeInTheDocument();
      userEvent.click(goatFilterBtn);

      const allMeal = await screen.findByText('Corba');
      expect(allMeal).toBeInTheDocument();
    });
    it('Verificar que o filtro "All" funcione', async () => {
      renderWithRouter(<App />, '/foods');
      const allFilterBtn = await screen.findByTestId(allFilterId);
      userEvent.click(allFilterBtn);

      const allMeal = await screen.findByText('Corba');

      expect(allMeal).toBeInTheDocument();
    });
    it('Verificar que nao re-renderiza vindo de ingredients', async () => {
      renderWithRouter(<App />, '/explore/foods/ingredients');
      const ingredient = await screen.findByTestId('0-ingredient-card');
      userEvent.click(ingredient);

      const allDrink = await screen.findByText('Chicken Handi');

      expect(allDrink).toBeInTheDocument();
    });
  });
