import { IOrderItem } from './IOrderItem';
import { IPerson } from './IPerson';

export interface IOrder {
  id: number;
  items: IOrderItem[];
  person: IPerson;
};
