import React from 'react';
import Card from '../components/Card';
import ExploreDrinksFoods from '../components/ExploreDrinksFoods';
import Header from '../components/Header';
import MenuInferior from '../components/MenuInferior';

function ExploreFoods() {
  return (
    <div>
      <ExploreDrinksFoods />
      <h1 data-testid="page-title">Explore Foods</h1>
      <Header />
      <Card />
      <MenuInferior />
    </div>
  );
}

export default ExploreFoods;
