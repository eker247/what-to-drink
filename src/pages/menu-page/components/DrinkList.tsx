import React from 'react';
import { IDrink } from '../../../interfaces/IDrink';
import { IExtra } from '../../../interfaces/IExtra';
import { DrinkEdit } from './DrinkEdit';
import { DrinkExtraList } from './DrinkExtraList';

export function DrinkList(props: { drinks: IDrink[]; drinkChange: (drink: IDrink) => void }) {
  const [drink, setDrink] = React.useState({} as IDrink);
  
  const handleExtraRemove = (drinkId: number, extraToRemove: IExtra) => {
    const drink = props.drinks.find((drink) => drink.id === drinkId);
    if (drink) {
      const extras = drink.extras.filter((extra) => extra.name !== extraToRemove.name);
      props.drinkChange({ ...drink, extras });
    }
  };

  return (
    <>
      {drink.id ? <DrinkEdit drink={drink} saveDrink={props.drinkChange} cancelDrink={() => setDrink({} as IDrink)} /> : ''}
      <table>
        <thead>
          <tr>
            <th>No</th>
            <th>Name</th>
            <th>Type</th>
            <th>Extras</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {props.drinks.map((drink, index) => (
            <tr key={'drink' + drink.id}>
              <td>{index + 1}</td>
              <td>{drink.name}</td>
              <td>{drink.type || ''}</td>
              <td>
                <DrinkExtraList
                  extras={drink.extras}
                  extraChange={(extra: IExtra) => props.drinkChange({ ...drink, extras: [...drink.extras, extra] })}
                  extraRemove={(extra: IExtra) => handleExtraRemove(drink.id, extra)}
                />
              </td>
              <td>
                <button>Remove</button>
                <button onClick={() => setDrink(drink)}>Edit</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
