import '@testing-library/jest-dom';
import { screen } from '@testing-library/react';
// import userEvent from '@testing-library/user-event';
import React from 'react';
import App from '../App';
import renderWithRouter from './Helpers/renderWithRouter';

describe('Teste o componente <FoodsDetails.js>',
  () => {
    const photoID = 'recipe-photo';
    const recipeTitle = 'recipe-title';
    const shareBtn = 'share-btn';
    const favBtn = 'favorite-btn';
    const categoryId = 'recipe-category';
    const instructionsID = 'instructions';
    const videoId = 'video';
    const startId = 'start-recipe-btn';
    const ingredientId = '5-ingredient-name-and-measure';
    const recomendationId = '1-recomendation-card';

    it('A tela tem os data-testids', async () => {
      renderWithRouter(<App />, '/foods/52940');

      const photo = screen.queryByTestId(photoID);
      const title = screen.queryByTestId(recipeTitle);
      const share = screen.queryByTestId(shareBtn);
      const favorite = screen.queryByTestId(favBtn);
      const category = screen.queryByTestId(categoryId);
      const instructions = screen.queryByTestId(instructionsID);
      const video = await screen.findByTestId(videoId);
      const startRecipe = screen.queryByTestId(startId);
      const ingredient = screen.queryByTestId(ingredientId);
      const recomendation = await screen.findByTestId(recomendationId);

      expect(photo).toBeInTheDocument();
      expect(title).toBeInTheDocument();
      expect(share).toBeInTheDocument();
      expect(favorite).toBeInTheDocument();
      expect(category).toBeInTheDocument();
      expect(instructions).toBeInTheDocument();
      expect(video).toBeInTheDocument();
      expect(startRecipe).toBeInTheDocument();
      expect(ingredient).toBeInTheDocument();
      expect(recomendation).toBeInTheDocument();
    });
  });
