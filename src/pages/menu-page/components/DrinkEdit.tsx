import React from 'react';
import { IDrink } from '../../../interfaces/IDrink';

export function DrinkEdit(props: { drink: IDrink; saveDrink: (drink: IDrink) => void; cancelDrink: () => void }) {
  const [name, setName] = React.useState('');
  const [type, setType] = React.useState('');

  React.useEffect(() => {
    setName(props.drink.name);
    setType(props.drink.type || '');
  }, [props]);

  const handleSaveClick = () => {
    const drink = { ...props.drink, name, type };
    console.log('SAVE CLICKED', drink);
  };

  return (
    <>
      <h3>
        Drink Edit! {props.drink.name} {props.drink.type || ''}
      </h3>
      <input placeholder="Name" value={name} onChange={(event) => setName(event.target.value)} />
      <input placeholder="Type" value={type} onChange={(event) => setType(event.target.value)} />
      <button onClick={handleSaveClick}>Save</button>
      <button onClick={props.cancelDrink}>Cancel</button>
    </>
  );
}
