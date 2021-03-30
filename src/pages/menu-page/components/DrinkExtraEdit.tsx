import React from 'react';
import { IExtra } from '../../../interfaces/IExtra';

export function DrinkExtraEdit(props: {
  extraChange: (extra: IExtra) => void;
  extra?: IExtra;
}) {
  const [name, setName] = React.useState('');
  const [unit, setUnit] = React.useState('');

  React.useEffect(() => {
    setName(props.extra?.name || '');
    setUnit(props.extra?.unit || '');
  }, [props])

  const handleSaveExtra = (event: React.MouseEvent<HTMLButtonElement>): void => {
    console.log('PLACE FOR VALIDATION IN DrinkExtraEdit.tsx');
    const extra: IExtra = { name, unit, amount: 0 };
    props.extraChange(extra);
  }

  const handleClearExtra = (event: React.MouseEvent<HTMLButtonElement>): void => {
    setName('');
    setUnit('');
  }

  return (
    <li>
      <input placeholder="Name" value={name} onChange={event => setName(event.target.value)} />
      <input placeholder="Unit" value={unit} onChange={event => setUnit(event.target.value)} />
      <button onClick={handleSaveExtra}>Save</button>
      <button onClick={handleClearExtra}>Clear</button>
    </li>
  );
}
