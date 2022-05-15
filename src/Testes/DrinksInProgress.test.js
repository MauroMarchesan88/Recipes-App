import '@testing-library/jest-dom';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import App from '../App';
import renderWithRouter from './Helpers/renderWithRouter';

// tive problemas com o clipboard, acontece que o ambiente de teste nao tem a função entao e preciso mockar https://stackoverflow.com/questions/62351935/how-to-mock-navigator-clipboard-writetext-in-jest
Object.assign(navigator, {
  clipboard: {
    writeText: () => {},
  },
});

describe('Teste o componente <DrinksInProgress.js>',
  () => {
    // const maxItemsRendered = 13;
    const routeToRecipe = '/drinks/17222/in-progress';
    const photoID = 'recipe-photo';
    const recipeTitleId = 'recipe-title';
    const shareBtnId = 'share-btn';
    const favBtnId = 'favorite-btn';
    const categoryId = 'recipe-category';
    const instructionsID = 'instructions';
    const finishId = 'finish-recipe-btn';
    const ingredientId = '-ingredient-step';
    jest.spyOn(navigator.clipboard, 'writeText');

    it(
      'Verifica se os atributos testid estão presentes na tela',
      async () => {
        renderWithRouter(<App />, routeToRecipe);

        const photo = await screen.findByTestId(photoID);
        const recipeTitle = await screen.findByTestId(recipeTitleId);
        const shareBtn = await screen.findByTestId(shareBtnId);
        const favBtn = await screen.findByTestId(favBtnId);
        const category = await screen.findByTestId(categoryId);
        const instructions = await screen.findByTestId(instructionsID);
        const finishBtn = await screen.findByTestId(finishId);
        const ingredient = await screen.findByTestId(`0${ingredientId}`);

        expect(photo).toBeInTheDocument();
        expect(recipeTitle).toBeInTheDocument();
        expect(shareBtn).toBeInTheDocument();
        expect(favBtn).toBeInTheDocument();
        expect(category).toBeInTheDocument();
        expect(instructions).toBeInTheDocument();
        expect(finishBtn).toBeInTheDocument();
        expect(ingredient).toBeInTheDocument();
      },
    );
    it('Verifica se todos os ingredientes de uma receita de bebida possuem um checkbox',
      async () => {
        renderWithRouter(<App />, routeToRecipe);

        // nao sei porque foi preciso usar o concat ja que o regex /\d-card-img/g somente pegava os pares. Regex funcionando em outros componentes.
        const evenIngredientArray = await screen
          .findAllByTestId(/[02]-ingredient-step/g);
        const unevenIngredientArray = await screen
          .findAllByTestId(/[13]-ingredient-step/g);
        const checkboxArray = await screen.findAllByRole('checkbox');
        const finalArray = evenIngredientArray.concat(unevenIngredientArray);

        expect(finalArray.length).toBe(checkboxArray.length);
      });
    it('Verifica se é possível marcar todos os passos da receita de bebida', async () => {
      renderWithRouter(<App />, routeToRecipe);

      const checkboxArray = await screen.findAllByRole('checkbox');

      for (let index = 0; index < checkboxArray.length; index += 1) {
        userEvent.click(checkboxArray[index]);
      }

      for (let index = 0; index < checkboxArray.length; index += 1) {
        expect(checkboxArray[index]).toHaveProperty('checked', true);
      }
    });
    it('Verifica se o nome do ingrediente e "riscado" da lista', async () => {
      renderWithRouter(<App />, routeToRecipe);

      const checkboxArray = await screen.findAllByRole('checkbox');

      userEvent.click(checkboxArray[2]);
      const firstCheckbox = await screen.findByText('1 3/4 shot Gin');

      expect(firstCheckbox).toBeInTheDocument();
      expect(firstCheckbox.className).toBe('mark');
    });
    it('O botao de copiar link funciona corretamente', async () => {
      renderWithRouter(<App />, routeToRecipe);

      const share = screen.getByTestId(shareBtnId);
      userEvent.click(share);

      expect(navigator.clipboard.writeText).toHaveBeenCalled();
    });
    it('O botao de favorito funciona corretamente', async () => {
      renderWithRouter(<App />, routeToRecipe);

      const favorite = screen.queryByTestId(favBtnId);
      expect(favorite).toHaveProperty('src', 'http://localhost/whiteHeartIcon.svg');

      userEvent.click(favorite);
      const favorited = screen.queryByTestId(favBtnId);

      expect(favorited).toHaveProperty('src', 'http://localhost/blackHeartIcon.svg');
    });
  });
