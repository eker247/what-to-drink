import { IOrder } from '../interfaces/IOrder';
import { StorageService } from './StorageService';

export class PeopleService {
  static getPeople(): IOrder[] {
    return JSON.parse(StorageService.getItem('people') || '') as IOrder[];
  }

  static savePeople(people: IOrder[]) {
    StorageService.setItem('people', JSON.stringify(people));
  }

  static deletePerson(id: number) {

  }
  
  static savePerson(name: string) {
    const people = [...this.getPeople(), { id: Date.now(), name, orders: {} }] as IOrder[];
    this.savePeople(people);
  }
}