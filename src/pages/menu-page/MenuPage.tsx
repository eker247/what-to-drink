import React, { useEffect, useState } from 'react';
import { DrinkList } from './components/DrinkList';
import { IDrink } from '../../interfaces/IDrink';
import { IExtra } from '../../interfaces/IExtra';
import { MenuService } from '../../services/MenuService';

const mockCoffeeExtras: IExtra[] = [
  { name: 'Milk', amount: 0 },
  { name: 'Sugar', amount: 0 },
];

const mockTeaExtras: IExtra[] = [
  { name: 'Ginger', amount: 0 },
  { name: 'Honey', amount: 0 },
  { name: 'Lemon', amount: 0 },
  { name: 'Mint', amount: 0 },
  { name: 'Sugar', amount: 0 },
];

const mockWaterExtras: IExtra[] = [
  { name: 'Ginger', amount: 0 },
  { name: 'Lemon', amount: 0 },
  { name: 'Mint', amount: 0 },
];

const mockDrinks: IDrink[] = [
  { id: 1, name: 'Coffee', type: 'Brewed', extras: mockCoffeeExtras },
  { id: 2, name: 'Coffee', type: 'Instant', extras: mockCoffeeExtras },
  { id: 3, name: 'Juice', type: 'Apple', extras: [] },
  { id: 4, name: 'Juice', type: 'Orange', extras: [] },
  { id: 5, name: 'Tea', type: 'Black', extras: mockTeaExtras },
  { id: 6, name: 'Tea', type: 'Green', extras: mockTeaExtras },
  { id: 7, name: 'Tea', type: 'Red', extras: mockTeaExtras },
  { id: 8, name: 'Tea', type: 'White', extras: mockTeaExtras },
  { id: 9, name: 'Water', type: 'Sparkling', extras: mockWaterExtras },
  { id: 10, name: 'Water', type: 'Still', extras: mockWaterExtras },
];

export function MenuPage() {
  const [menu, setMenu] = useState([] as IDrink[]);

  useEffect(() => {
    console.log('DRINKS', MenuService.getDrinks());
    setMenu(MenuService.getDrinks());
  }, [])

  // MenuService.saveDrinks(mockDrinks);
  const handleDrinkChange = (drink: IDrink) => {
    console.log('DrinkChanged', drink);
    // MenuService.saveDrink(drink);
    setMenu(MenuService.getDrinks());
  };

  return (
    <div>
      <h3>This is MenuPage!</h3>
      <div>User can crud available menu items.</div>
      <DrinkList drinks={menu} drinkChange={handleDrinkChange} />
    </div>
  );
}
