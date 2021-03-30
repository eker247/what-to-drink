import { IExtra } from './IExtra';

export interface IDrink {
  id: number;
  name: string;
  type?: string;
  extras: IExtra[];
}
