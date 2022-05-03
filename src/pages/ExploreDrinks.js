import React from 'react';
import MenuInferior from '../components/MenuInferior';
import Header from '../components/Header';

function ExploreDrinks() {
  return (
    <div>
      <h1 data-testid="page-title">Explore Drinks</h1>
      <Header />
      <MenuInferior />
    </div>
  );
}

export default ExploreDrinks;
