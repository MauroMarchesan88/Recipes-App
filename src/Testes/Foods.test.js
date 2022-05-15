import '@testing-library/jest-dom';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import App from '../App';
import renderWithRouter from './Helpers/renderWithRouter';

describe('Teste o componente <Foods.js>',
  () => {
    const maxItemsRendered = 12;

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

      const category1 = await screen.findByTestId('Beef-category-filter');
      const category2 = await screen.findByTestId('Breakfast-category-filter');
      const category3 = await screen.findByTestId('Chicken-category-filter');
      const category4 = await screen.findByTestId('Dessert-category-filter');
      const category5 = await screen.findByTestId('Goat-category-filter');

      expect(category1).toBeInTheDocument();
      expect(category2).toBeInTheDocument();
      expect(category3).toBeInTheDocument();
      expect(category4).toBeInTheDocument();
      expect(category5).toBeInTheDocument();
    });
    it('Verificar que o filtro "Beef" funcione', async () => {
      renderWithRouter(<App />, '/foods');
      const beefFilterBtn = await screen.findByTestId('Beef-category-filter');
      userEvent.click(beefFilterBtn);

      const imgArray = await screen.findAllByTestId(/\d-card-img/gm);

      expect(imgArray[0]).toHaveProperty('src', 'https://www.themealdb.com/images/media/meals/sytuqu1511553755.jpg');
      expect(imgArray[1]).toHaveProperty('src', 'https://www.themealdb.com/images/media/meals/wrssvt1511556563.jpg');
      expect(imgArray[2]).toHaveProperty('src', 'https://www.themealdb.com/images/media/meals/z0ageb1583189517.jpg');
      expect(imgArray[3]).toHaveProperty('src', 'https://www.themealdb.com/images/media/meals/vtqxtu1511784197.jpg');
      expect(imgArray[4]).toHaveProperty('src', 'https://www.themealdb.com/images/media/meals/ursuup1487348423.jpg');
      expect(imgArray[5]).toHaveProperty('src', 'https://www.themealdb.com/images/media/meals/uyqrrv1511553350.jpg');
      expect(imgArray[6]).toHaveProperty('src', 'https://www.themealdb.com/images/media/meals/1529444830.jpg');
      expect(imgArray[7]).toHaveProperty('src', 'https://www.themealdb.com/images/media/meals/bc8v651619789840.jpg');
      expect(imgArray[8]).toHaveProperty('src', 'https://www.themealdb.com/images/media/meals/svprys1511176755.jpg');
      expect(imgArray[9]).toHaveProperty('src', 'https://www.themealdb.com/images/media/meals/ssrrrs1503664277.jpg');
      expect(imgArray[10]).toHaveProperty('src', 'https://www.themealdb.com/images/media/meals/vvpprx1487325699.jpg');
      expect(imgArray[11]).toHaveProperty('src', 'https://www.themealdb.com/images/media/meals/urzj1d1587670726.jpg');
    });
  });
