import React from 'react';
import { IExtra } from '../../../interfaces/IExtra';
import { DrinkExtraEdit } from './DrinkExtraEdit';

export function DrinkExtraList(props: {
  extras: IExtra[];
  extraChange: (extra: IExtra) => void;
  extraRemove: (extra: IExtra) => void;
}) {
  let emptyExtra: IExtra = { name: '', unit: '', amount: 0 };
  const [extra, setExtra] = React.useState(emptyExtra);

  return (
    <ol>
      {props.extras.map((extra) => (
        <li key={'extra' + extra.name}>
          {extra.name} {extra.amount || ''}
          {extra.unit ? `[${extra.unit}]` : ''}
          <button onClick={() => props.extraRemove(extra)}>Remove</button>
          <button onClick={() => setExtra(extra)}>Copy</button>
        </li>
      ))}
      <DrinkExtraEdit extra={extra} extraChange={props.extraChange} />
    </ol>
  );
}
